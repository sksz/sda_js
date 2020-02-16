<?php

const CAT = 'cat';
const DOG = 'dog';

$strings = ['Navicat', 'Category', 'Catharsis'];

foreach($strings as $string) {
    echo strpos(
        strtolower($string),
        CAT
    ), PHP_EOL;

    echo strlen($string), PHP_EOL;
    echo ucfirst(
        str_replace(
            CAT,
            DOG,
            strtolower($string)
        )
    ), PHP_EOL;
}

?>
