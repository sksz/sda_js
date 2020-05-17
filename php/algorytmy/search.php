<?php

function arraySum(array $array): int
{
    $result = 0;
    $index = count($array) - 1;

    while ($index + 1) {
        $result = $result + $array[$index];
        $index--;
    }

    return $result;
}

echo arraySum([4, 1, 6, 1, 3, 7, 3]);
