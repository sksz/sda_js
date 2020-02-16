<?php

switch ($userRole) {
    case 2:
        echo 'admin';
    case 1:
        echo 'moderator';
    default:
        echo 'user';
}

if ($userRole == 2) {
    echo 'admin';
    echo 'moderator';
    echo 'user';
} elseif ($userRole == 1) {
    echo 'moderator';
    echo 'user';
} else {
    echo 'user';
}
