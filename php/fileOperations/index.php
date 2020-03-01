<?php

declare(strict_types=1);

namespace FileOperations;

require __DIR__ . '/vendor/autoload.php';

$file = new FileOperations('test.txt', 'r');

while ($line = $file->read()) {
    echo $line;
}

$file = null;

$file = new FileOperations('test.txt', 'a');

$file->writeLine('jeszcze jeden tym razem dynamicznie');
$file->writeLine('i następny');
