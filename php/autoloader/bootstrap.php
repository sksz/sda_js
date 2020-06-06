<?php

spl_autoload_register(function ($class_name) {
    include_once str_replace('\\', '/', $class_name) . '.php';
});
