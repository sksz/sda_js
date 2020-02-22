<?php

declare(strict_types=1);

require_once 'Service.php';

class JanuszeKodu extends Service
{
    public $duration;

    public function __construct(string $name = '', string $city = '', int $duration = 1)
    {
        parent::__construct($name, $city);
        $this->duration = $duration;
    }
}
