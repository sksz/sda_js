<?php

$password = 'ala123';
$password2 = 'aaaa';

$salt = 'j3123n6943j23anbd72maa';
$salt2 = 'jasdo23rlds93rksefosd9';

$hash = password_hash($password, PASSWORD_DEFAULT, [
    'salt' => $salt,
    'cost' => 10,
]);

var_dump($hash);

$result = password_verify($password, $hash);
var_dump($result);

$result = password_verify($password . 'aaa', $hash);
var_dump($result);

$hash2 = password_hash($password2, PASSWORD_DEFAULT, [
    'salt' => $salt2,
    'cost' => 10,
]);
$result = password_verify($password2, $hash2);
var_dump($hash2);
var_dump($result);
