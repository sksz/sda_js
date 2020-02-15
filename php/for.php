<?php

for ($i = 1; $i < 10; ++$i) {
    if ($i === 5) {
        continue;
    }
    for ($j = 1; $j < 5; ++$j) {
       echo "i = $i oraz j = $j", PHP_EOL;
    }
}
