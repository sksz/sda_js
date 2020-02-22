<?php

declare(strict_types=1);

require_once 'Service.php';
require_once 'SalesManTrait.php';

class JanuszeKodu extends Service
{
    use SalesManTrait;

    public $duration;

    public function __construct(string $name = '', string $city = '', int $duration = 1, string $salesManName = '')
    {
        parent::__construct($name, $city);
        $this->duration = $duration;
        $this->salesManName = $salesManName;
    }
}
