<?php

$checkWeekday = 'Sunday';

$weekDays = [
    'Sunday' => [
        'pl' => 'Niedziela',
        'de' => 'Sonntag',
    ],
    'Monday' => [
        'pl' => 'Poniedziałek',
        'de' => 'Montag',
    ],
    'Tuesday' => [
        'pl' => 'Wtorek',
        'de' => 'Dienstag',
    ],
    'Wednesday' => [
        'pl' => 'Środa',
        'de' => 'Mittwoch',
    ],
    'Thursday' => [
        'pl' => 'Czwartek',
        'de' => 'Donnerstag',
    ],
    'Friday' => [
        'pl' => 'Piątek',
        'de' => 'Freitag',
    ],
    'Saturday' => [
        'pl' => 'Sobota',
        'de' => 'Samstag',
    ],
];

$language = [
    'pl' => 'polskim',
    'de' => 'niemieckim',
    'it' => 'włoskim',
];

foreach ($language as $key => $value) {
    echo 'Dzień ' . $checkWeekday . ' ' . (isset($weekDays[$checkWeekday][$key])  ? 'ma tłumaczenie ' : 'nie ma tłumaczenia ') . 'w języku ' . $value, PHP_EOL;
}




