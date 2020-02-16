<?php

$string = 'ABCDDCBA';
$array = str_split($string);
$length = strlen($string);

$half = floor($length / 2);
for ($i = 0; $i < $half; $i++) {
    $leftSide[] = $array[$i];
    $rightSide[] = $array[$length - $i - 1];
}

echo 'Podany ciąg znaków ' . ($leftSide === $rightSide ?  '' : 'nie ') . 'jest palindromem.'

?>
