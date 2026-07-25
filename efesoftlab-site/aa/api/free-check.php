<?php
require_once __DIR__ . '/config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') { jsonResponse(false, 'Geçersiz istek.'); }

$csrf = $_POST['_csrf'] ?? $_SERVER['HTTP_X_CSRF_TOKEN'] ?? '';
if (!verifyCSRFToken($csrf)) {
  logSecurityEvent('csrf_validation_failed', 'Keşif formu CSRF doğrulama hatası');
  jsonResponse(false, 'Güvenlik doğrulaması başarısız. Lütfen sayfayı yenileyip tekrar deneyin.');
}

$honeypot = $_POST['website'] ?? '';
if (!empty($honeypot)) {
  logSecurityEvent('spam_detected', 'Honeypot alanı dolduruldu (keşif formu)');
  jsonResponse(true, 'Talebiniz başarıyla alındı! En kısa sürede sizi arayacağız.');
}

checkRateLimit('kesif_' . getClientIP());

$siteName = validateField($_POST['siteName'] ?? '', 'Site / Apartman Adı');
$managerName = validateField($_POST['managerName'] ?? '', 'Yönetici Adı');
$managerPhone = validateField($_POST['managerPhone'] ?? '', 'Telefon');
$siteAddress = validateField($_POST['siteAddress'] ?? '', 'Adres');
$notes = sanitize($_POST['notes'] ?? '');

$entry = [
  'id' => uniqid('ins_'),
  'siteName' => sanitize($siteName),
  'managerName' => sanitize($managerName),
  'managerPhone' => sanitize($managerPhone),
  'siteAddress' => sanitize($siteAddress),
  'notes' => $notes,
  'created_at' => date('Y-m-d H:i:s'),
  'status' => 'new',
  'read' => false,
  'ip' => getClientIP()
];

$inspections = readData('inspections');
array_unshift($inspections, $entry);
writeData('inspections', $inspections);

$adminEmail = 'info@aguvenlik.com.tr';
$emailBody = "Yeni Ücretsiz Keşif Talebi\n\n"
  . "Site/ Apartman: {$entry['siteName']}\n"
  . "Yönetici: {$entry['managerName']}\n"
  . "Telefon: {$entry['managerPhone']}\n"
  . "Adres: {$entry['siteAddress']}\n"
  . "Notlar: {$entry['notes']}\n"
  . "Tarih: {$entry['created_at']}\n"
  . "IP: {$entry['ip']}\n";
$headers = "From: info@aguvenlik.com.tr\r\n"
  . "X-Mailer: PHP/" . phpversion();
@mail($adminEmail, 'Yeni Keşif Talebi - A&A Güvenlik', $emailBody, $headers);

jsonResponse(true, 'Talebiniz başarıyla alındı! En kısa sürede sizi arayacağız.', $entry);