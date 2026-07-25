<?php
header('Content-Type: application/json; charset=utf-8');

$allowedOrigin = 'https://aguvenlik.com.tr';
if (isset($_SERVER['HTTP_ORIGIN'])) {
  $origin = $_SERVER['HTTP_ORIGIN'];
  $allowedOrigins = [$allowedOrigin, 'http://localhost:3000', 'http://localhost', 'http://127.0.0.1'];
  if (in_array($origin, $allowedOrigins)) {
    header("Access-Control-Allow-Origin: $origin");
  }
} else {
  header('Access-Control-Allow-Origin: ' . $allowedOrigin);
}
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, X-CSRF-Token');
header('Access-Control-Allow-Credentials: true');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(204); exit; }

define('DATA_DIR', __DIR__ . '/data');
if (!is_dir(DATA_DIR)) { mkdir(DATA_DIR, 0755, true); }

define('RATE_LIMIT_WINDOW', 60);
define('RATE_LIMIT_MAX', 5);
define('ADMIN_TOKEN_HASH', hash('sha256', 'aaguvenlik-admin-2026'));

function sanitizeEmailHeader($str) {
  return str_replace(["\r", "\n", "\r\n", "%0d", "%0a", "\\r", "\\n"], '', trim($str));
}

function readData($file) {
  $path = DATA_DIR . '/' . $file . '.json';
  if (!file_exists($path)) { return []; }
  $data = file_get_contents($path);
  $decoded = json_decode($data, true);
  return is_array($decoded) ? $decoded : [];
}

function writeData($file, $data) {
  $path = DATA_DIR . '/' . $file . '.json';
  return file_put_contents($path, json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE), LOCK_EX);
}

function jsonResponse($success, $message = '', $data = []) {
  echo json_encode(['success' => $success, 'message' => $message, 'data' => $data], JSON_UNESCAPED_UNICODE);
  exit;
}

function validateField($value, $fieldName) {
  if (!isset($value) || trim($value) === '') {
    jsonResponse(false, "$fieldName alanı zorunludur.");
  }
  return trim($value);
}

function sanitize($str) {
  return htmlspecialchars(strip_tags(trim($str)), ENT_QUOTES, 'UTF-8');
}

function sanitizeEmail($email) {
  $email = trim($email);
  $email = str_replace(["\r", "\n", "\r\n", "%0d", "%0a"], '', $email);
  return filter_var($email, FILTER_SANITIZE_EMAIL);
}

function getClientIP() {
  $headers = ['HTTP_X_FORWARDED_FOR', 'HTTP_X_REAL_IP', 'HTTP_CLIENT_IP', 'REMOTE_ADDR'];
  foreach ($headers as $h) {
    if (!empty($_SERVER[$h])) {
      $ip = explode(',', $_SERVER[$h])[0];
      return trim($ip);
    }
  }
  return '0.0.0.0';
}

function checkRateLimit($key, $maxRequests = RATE_LIMIT_MAX, $window = RATE_LIMIT_WINDOW) {
  $file = DATA_DIR . '/ratelimit.json';
  $limits = readData('ratelimit');
  $now = time();
  $limits = array_filter($limits, function($entry) use ($now, $window) {
    return $entry['time'] > ($now - $window);
  });
  $count = 0;
  foreach ($limits as $entry) {
    if ($entry['key'] === $key) { $count++; }
  }
  if ($count >= $maxRequests) {
    jsonResponse(false, 'Çok fazla istek gönderdiniz. Lütfen ' . $window . ' saniye bekleyin.');
  }
  $limits[] = ['key' => $key, 'time' => $now, 'ip' => getClientIP()];
  writeData('ratelimit', array_values($limits));
}

function generateCSRFToken() {
  if (session_status() === PHP_SESSION_NONE) {
    session_start();
  }
  if (empty($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
  }
  return $_SESSION['csrf_token'];
}

function verifyCSRFToken($token) {
  if (session_status() === PHP_SESSION_NONE) {
    session_start();
  }
  if (empty($_SESSION['csrf_token']) || empty($token)) {
    return false;
  }
  return hash_equals($_SESSION['csrf_token'], $token);
}

function isAdminAuthenticated() {
  if (session_status() === PHP_SESSION_NONE) {
    session_start();
  }
  if (!empty($_SESSION['admin_authenticated']) && $_SESSION['admin_authenticated'] === true) {
    if (isset($_SESSION['admin_expires']) && $_SESSION['admin_expires'] > time()) {
      return true;
    }
  }
  $authHeader = $_SERVER['HTTP_X_ADMIN_TOKEN'] ?? '';
  if ($authHeader && hash('sha256', $authHeader) === ADMIN_TOKEN_HASH) {
    return true;
  }
  return false;
}

function requireAdmin() {
  if (!isAdminAuthenticated()) {
    jsonResponse(false, 'Yetkisiz erişim. Lütfen admin panelinden giriş yapın.');
  }
}

function logSecurityEvent($action, $details = '') {
  $log = readData('security_logs');
  $log[] = [
    'id' => uniqid('sec_'),
    'action' => $action,
    'details' => $details,
    'ip' => getClientIP(),
    'user_agent' => $_SERVER['HTTP_USER_AGENT'] ?? '',
    'created_at' => date('Y-m-d H:i:s')
  ];
  writeData('security_logs', $log);
}
