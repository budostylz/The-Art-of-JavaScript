<?php
header('Access-Control-Allow-Origin: *');
header('Content-type: '.'image/jpeg');
$pic='dogsatplay.jpg';
header('Content-length: '.filesize($pic));
$file = @ fopen($pic, 'rb');
if ($file) {
    fpassthru($file);
    exit;
}?>