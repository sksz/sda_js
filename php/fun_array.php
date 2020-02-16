<?php

$alcohols = ['beer', 'wine', 'whisky', 'vodka'];

echo count($alcohols), PHP_EOL;
echo end($alcohols), PHP_EOL;
echo array_pop($alcohols), PHP_EOL;
var_dump(array_chunk($alcohols, 2));
var_dump(array_chunk($alcohols, 3));

?>
