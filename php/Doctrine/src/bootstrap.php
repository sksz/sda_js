<?php

use Doctrine\ORM\Tools\Setup;
use Doctrine\ORM\EntityManager;

require_once "vendor/autoload.php";

$isDevMode = true;
$proxyDir = null;
$cache = null;
$useSimpleAnnotationReader = false;

$config = Setup::createAnnotationMetadataConfiguration(
    [__DIR__."/src"],
    $isDevMode,
    $proxyDir,
    $cache,
    $useSimpleAnnotationReader
);

$conn = [
    'dbname' => 'bugtracker',
    'user' => 'root',
    'password' => '1qwasa',
    'host' => 'localhost',
    'driver' => 'pdo_mysql',
];

