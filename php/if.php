<?php

$testArray = [];

for ($i = 0; $i < 100000000; $i++) {
    $testArray[] = rand(0, 1000000);
}

$allocatedMemory = memory_get_usage();

if ($allocatedMemory < 640 * 1024) { // 655360
    echo '640 KB wystarczy kazdemu';
} else {
    echo 'Potrzebujesz ' . $allocatedMemory / 1024 / 1024 . ' MB';
}

echo PHP_EOL;

var_dump($allocatedMemory);
