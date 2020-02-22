<?php

declare(strict_types=1);

require_once 'Service.php';

$service = new Service('name', 'city');
$service(1);

var_dump($service);
