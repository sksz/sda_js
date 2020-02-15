<?php

$temperatureInCelsius = readline('Podaj temperaturę w stopniach celsjusza:');

$parts = explode('.', $temperatureInCelsius);

if (
    !ctype_digit($parts[0]) &&
    (
        !array_key_exists(1, $parts) ||
        (
            array_key_exists(1, $parts) &&
            !ctype_digit($parts[1])
        )
    )) {
    die('Podana temperatura musi być liczbą.' . PHP_EOL);
}

// if (!preg_match('/^[1-9][0-9]*(\.)?[0-9]*$/', $temperatureInCelsius)) {
//     die('Podana temperatura musi być liczbą.' . PHP_EOL);
// }

printf('Temperatura w stopniach farenheita: %01.2f' . PHP_EOL, (float) $temperatureInCelsius * 1.8 + 32);

?>
