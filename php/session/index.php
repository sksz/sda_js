<?php

session_set_cookie_params(10);
session_start();

if (!isset($_SESSION['count'])) {
    $_SESSION['count'] = 0;
} else {
    $_SESSION['count']++;
}

if (isset($_SESSION['token'])) {
    $tokenElements = explode(',', $_SESSION['token']);
    if (
        $tokenElements[0] < time() - 10 ||
        $tokenElements[1] !== 'sksz' ||
        $tokenElements[2] !== $_SERVER['REMOTE_ADDR']
    ) {
        session_destroy();
        session_abort();
        $_SESSION = [];
    } else {
        $_SESSION['token'] = (string) time() . ',' . 'sksz' . ',' . $_SERVER['REMOTE_ADDR'];
    }
} else {
    $_SESSION['token'] = (string) time() . ',' . 'sksz' . ',' . $_SERVER['REMOTE_ADDR'];
}

session_regenerate_id();

var_dump($_SESSION);
