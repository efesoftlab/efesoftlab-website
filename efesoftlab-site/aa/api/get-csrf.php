<?php
require_once __DIR__ . '/config.php';
$token = generateCSRFToken();
jsonResponse(true, '', ['token' => $token]);