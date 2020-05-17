<?php

$data = [1,2,3,4,5];

function bubbleSort(array $data)
{
    $changed = true;
    while ($changed) {
        $changed = false;
        $index = count($data) - 1;
        while ($index) {
            if ($data[$index] < $data[$index - 1]) {
                $temporary = $data[$index];
                $data[$index] = $data[$index - 1];
                $data[$index - 1] = $temporary;

                $changed = true;
            }
            $index--;
        }
    }
    return $data;
}
var_dump(bubbleSort($data));
