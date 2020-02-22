<?php

declare(strict_types=1);

require_once('Offer.php');

abstract class Product extends Offer
{
    public $quantity;

    public function __construct(string $name = '', int $quantity = 1)
    {
        parent::__construct($name, 'Product');
        $this->quantity = $quantity;
    }
}
