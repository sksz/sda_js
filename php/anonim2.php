<?php

$names = ['Zenon', 'Yeti', 'X-man'];
$greeting = 'Hi';
$hellos = array_map(

    function(string $name) use ($greeting): string {
    return "{$greeting}, {$name}!";
}, $names
);
var_export($hellos);

?>
