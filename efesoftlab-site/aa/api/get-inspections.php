<?php
require_once __DIR__ . '/config.php';

requireAdmin();

$inspections = readData('inspections');
$messages = readData('messages');

jsonResponse(true, '', [
  'inspections' => $inspections,
  'messages' => $messages,
  'total_inspections' => count($inspections),
  'total_messages' => count($messages)
]);