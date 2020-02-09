<?php

const STALA_LICZBOWA = 1;
const STALA_CIAG_ZNAKOW = 'test';

echo STALA_LICZBOWA . "\n";
echo STALA_CIAG_ZNAKOW . "\n";

const KEY = 'test22';

// Tablica asocjacyjna (hash) #
$tablica = [
    'test22' => 'wart',
    'klucz' => 'a',
];

$tablica2 = $tablica;

echo $tablica[KEY];
echo $tablica2[KEY];

?>
