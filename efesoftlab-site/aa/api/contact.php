<?php
require_once __DIR__ . '/config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') { jsonResponse(false, 'Geçersiz istek.'); }

$csrf = $_POST['_csrf'] ?? $_SERVER['HTTP_X_CSRF_TOKEN'] ?? '';
if (!verifyCSRFToken($csrf)) {
  logSecurityEvent('csrf_validation_failed', 'İletişim formu CSRF doğrulama hatası');
  jsonResponse(false, 'Güvenlik doğrulaması başarısız. Lütfen sayfayı yenileyip tekrar deneyin.');
}

$honeypot = $_POST['website'] ?? '';
if (!empty($honeypot)) {
  logSecurityEvent('spam_detected', 'Honeypot alanı dolduruldu (iletişim formu)');
  jsonResponse(true, 'Mesajınız başarıyla gönderildi!');
}

checkRateLimit('contact_' . getClientIP());

$name = validateField($_POST['name'] ?? '', 'Ad Soyad');
$email = validateField($_POST['email'] ?? '', 'E-posta');
$phone = validateField($_POST['phone'] ?? '', 'Telefon');
$subject_key = sanitize($_POST['subject'] ?? '');
$message = validateField($_POST['message'] ?? '', 'Mesaj');

$email = sanitizeEmail($email);
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  jsonResponse(false, 'Geçerli bir e-posta adresi giriniz.');
}

$subjectList = [
  'kamera-sistemleri' => 'Güvenlik Kamera Sistemleri',
  'cipli-giris' => 'Çipli Giriş Sistemleri',
  'bilgisayar-satis' => 'Bilgisayar Satış & Destek',
  'kurulum-bakim' => 'Kurulum & Bakım',
  'ucretsiz-kesif' => 'Ücretsiz Keşif Talebi',
  'ariza-bildirimi' => 'Arıza Bildirimi',
  'diger' => 'Diğer'
];
$subjectText = $subjectList[$subject_key] ?? 'Diğer';

$entry = [
  'id' => uniqid('msg_'),
  'name' => sanitize($name),
  'email' => $email,
  'phone' => sanitize($phone),
  'subject' => $subjectText,
  'subject_key' => $subject_key,
  'message' => sanitize($message),
  'created_at' => date('Y-m-d H:i:s'),
  'status' => 'new',
  'read' => false,
  'ip' => getClientIP()
];

$messages = readData('messages');
array_unshift($messages, $entry);
writeData('messages', $messages);

$adminEmail = 'info@aguvenlik.com.tr';
$safeEmail = sanitizeEmailHeader($email);
$safeName = sanitizeEmailHeader($name);
$emailSubject = "İletişim Formu: $subjectText";
$emailBody = "Yeni İletişim Mesajı\n\n"
  . "Ad Soyad: {$entry['name']}\n"
  . "E-posta: {$entry['email']}\n"
  . "Telefon: {$entry['phone']}\n"
  . "Konu: $subjectText\n"
  . "Mesaj: {$entry['message']}\n"
  . "Tarih: {$entry['created_at']}\n"
  . "IP: {$entry['ip']}\n";
$headers = "From: info@aguvenlik.com.tr\r\n"
  . "Reply-To: $safeName <$safeEmail>\r\n"
  . "X-Mailer: PHP/" . phpversion();
@mail($adminEmail, $emailSubject, $emailBody, $headers);

jsonResponse(true, 'Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.', $entry);