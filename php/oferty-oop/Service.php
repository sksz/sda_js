<?php

declare(strict_types=1);

require_once('Offer.php');

abstract class Service extends Offer
{
    public $city;

    public function __construct(string $name = '', string $city = '')
    {
        parent::__construct($name, 'Service');
        $this->city = $city;
    }
}
