<?php

declare(strict_types=1);

require_once('Offer.php');

class Product extends Offer
{
    private $quantity;

    public function __construct(string $name = '', int $quantity = 1)
    {
        parent::__construct($name, 'Product');
        $this->quantity = $quantity;
    }

    public function getQuantity(): string
    {
        return $this->quantity;
    }

    public function setQuantity(string $quantity): Service
    {
        $this->quantity = $quantity;

        return $this;
    }

    public function sayGoodbye(string $tekst = ''): string
    {
        return $tekst;
    }
}






