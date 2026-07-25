<?php
require_once __DIR__ . '/config.php';

$token = $_GET['token'] ?? '';
if ($token !== 'aaguvenlik-admin-2026') { jsonResponse(false, 'Yetkisiz erişim.'); }

$type = $_POST['type'] ?? '';
$id = $_POST['id'] ?? '';

if (!$type || !$id) { jsonResponse(false, 'Eksik parametre.'); }

$file = ($type === 'inspection') ? 'inspections' : 'messages';
$items = readData($file);

foreach ($items as &$item) {
  if ($item['id'] === $id) { $item['read'] = true; break; }
}

writeData($file, $items);
jsonResponse(true, 'İşaretlendi.');
