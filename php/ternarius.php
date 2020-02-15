<?php

$x = 4;

printf('%s %u jest %s', $x < 10 && $x > -10 ? 'Cyfra' : 'Liczba', $x, $x % 2 ? 'nieparzysta' : 'parzysta');
