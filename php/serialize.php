<?php

$tablica = [
    'a' => 'aaa',
    'b' => 'bbb',
];

$zmienna = serialize($tablica);

var_dump(unserialize($zmienna));

?>
