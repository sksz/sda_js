<?php

declare(strict_types=1);

function printFamilyName(string $familyName, string &$sentence, int $birthYear = 2000): void
{
    $sentence = "Name: $familyName. Born: $birthYear" . PHP_EOL;
}

$zdanie = '';

printFamilyName('Nowak', $zdanie, 1981);
echo $zdanie;

printFamilyName('Kowalski', $zdanie);
echo $zdanie;
?>
