<?php

function factorial(int $n): int
{
    return $n ? $n * factorial($n - 1) : 1;
}

$a = 4;

echo factorial($a), PHP_EOL;

?>
