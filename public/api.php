<?php
// api.php - Backend API for cPanel / PHP hosting to persist database changes live
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$dataFile = __DIR__ . '/data.json';

// GET request: fetch current saved data
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (file_exists($dataFile)) {
        $content = file_get_contents($dataFile);
        echo $content;
    } else {
        echo json_encode([
            'status' => 'empty',
            'message' => 'No data file found yet.'
        ], JSON_UNESCAPED_UNICODE);
    }
    exit();
}

// POST request: save updated data
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $rawInput = file_get_contents('php://input');
    $decoded = json_decode($rawInput, true);

    if ($decoded) {
        $saved = file_put_contents($dataFile, json_encode($decoded, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
        if ($saved !== false) {
            echo json_encode([
                'status' => 'success',
                'message' => 'اطلاعات با موفقیت در فایل data.json هاست cPanel ذخیره شد.'
            ], JSON_UNESCAPED_UNICODE);
        } else {
            http_response_code(500);
            echo json_encode([
                'status' => 'error',
                'message' => 'خطا در مجوز دسترسی یا نوشتن فایل روی سرور cPanel'
            ], JSON_UNESCAPED_UNICODE);
        }
    } else {
        http_response_code(400);
        echo json_encode([
            'status' => 'error',
            'message' => 'داده ارسال شده فرمت JSON معتبر ندارد'
        ], JSON_UNESCAPED_UNICODE);
    }
    exit();
}
