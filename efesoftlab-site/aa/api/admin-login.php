<?php
require_once __DIR__ . '/config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') { jsonResponse(false, 'Geçersiz istek.'); }

checkRateLimit('admin_login_' . getClientIP(), 5, 300);

$password = $_POST['password'] ?? '';

if (empty($password)) {
  logSecurityEvent('admin_login_empty', 'Boş şifre denemesi');
  jsonResponse(false, 'Şifre gerekli.');
}

$adminHash = hash('sha256', 'admin123');

if (hash('sha256', $password) !== $adminHash) {
  logSecurityEvent('admin_login_failed', 'Başarısız admin giriş denemesi');
  jsonResponse(false, 'Hatalı şifre.');
}

if (session_status() === PHP_SESSION_NONE) {
  session_start();
}
session_regenerate_id(true);
$_SESSION['admin_authenticated'] = true;
$_SESSION['admin_expires'] = time() + 7200;
$_SESSION['admin_ip'] = getClientIP();
$_SESSION['admin_user_agent'] = $_SERVER['HTTP_USER_AGENT'] ?? '';
$_SESSION['admin_login_time'] = date('Y-m-d H:i:s');

logSecurityEvent('admin_login_success', 'Admin girişi başarılı');

jsonResponse(true, 'Giriş başarılı.', [
  'session_expires' => $_SESSION['admin_expires'],
  'login_time' => $_SESSION['admin_login_time']
]);