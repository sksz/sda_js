<?php

declare(strict_types=1);

namespace FileOperations;

require __DIR__ . '/vendor/autoload.php';

$file = new FileOperations('test.txt', 'r');

while ($line = $file->read()) {
    echo $line;
}

// var_dump($file);
