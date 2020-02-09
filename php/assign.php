<?php

/**
 * Imię psa lub kota.
 * 
 * @var string 
 */
$name = 'Bobik';

/**
 * Ilość zajętych pokoi.
 * 
 * @var int
 */
$roomsCounter = 13;

/**
 * Nazwa zespołu występującego teraz na scenie.
 * 
 * @var string
 */
$currentBandName = $name;

echo $name . "\n";
print($roomsCounter . "\n");
echo sprintf($currentBandName);
