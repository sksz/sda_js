<?php

$liczba = 473;

$dziesietneIJednosci = $liczba % 100;
$setki = floor($liczba / 100);

$tablicaSetek = [
    'sto', 'dwieście', 'trzysta', 'czterysta', 'pięćset', 'sześćset', 'siedemset', 'osiemset', 'dziewięćset',
];

$tablicaDziesiatek = [
    'dwadzieścia', 'trzydzieści', 'czterdzieści', 'pięćdziesiąt', 'sześćdziesiąt', 'siedemdziesiąt', 'osiemdziesiąt', 'dziewiećdziesiąt',
];

$tablicaNastek = [
    'jedenaście', 'dwanaście', 'trzynaście', 'czternaście', 'piętnaście', 'szesnaście', 'siedemnaście', 'osiemnaście', 'dziewiętnaście',
];

$tablicaJednosci = [
    'jeden', 'dwa', 'trzy', 'cztery', 'pięć', 'sześć', 'siedem', 'osiem', 'dziewięć', 'dziesięć',
];

$dziesiatki = floor($dziesietneIJednosci / 10);

$jednosci = $dziesietneIJednosci % 10;

if (!$liczba) {
    die('Zero' . PHP_EOL);
}


echo
    $tablicaSetek[$setki - 1] . ' ' .
    ($dziesietneIJednosci > 10 && $dziesietneIJednosci < 20 ?
        $tablicaNastek[$dziesietneIJednosci - 11] . ' ' :
        ($dziesietneIJednosci < 11 ?
            $tablicaJednosci[$dziesietneIJednosci - 1] :
            $tablicaDziesiatek[$dziesiatki - 2] . ' ' . ($jednosci ? $tablicaJednosci[$jednosci - 1] : ''))) . ' PLN' .
    PHP_EOL;















?>
