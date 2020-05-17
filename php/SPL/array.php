<?php

$testArray = new ArrayIterator([
    'key1' => 'val1',
    'key2' => 'val2',
    'imię' => 'nazwisko',
    'test' => 'tablic',
]);

// var_dump($testArray);

for ($testArray; $testArray->valid(); $testArray->next()) {
    echo $testArray->key() . ' => ' . $testArray->current() . "\n";
}
