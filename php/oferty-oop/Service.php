<?php

declare(strict_types=1);

require_once('Offer.php');

class Service extends Offer
{
    private $city;

    public function __construct(string $name = '', string $city = '')
    {
        parent::__construct($name, 'Service');
        $this->city = $city;
    }

    public function getCity(): string
    {
        return $this->city;
    }

    public function setCity(string $city): Service
    {
        $this->city = $city;

        return $this;
    }

    public function sayGoodbye(string $tekst = ''): string
    {
        return 'Good bye';
    }
}






