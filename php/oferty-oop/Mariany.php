<?php

declare(strict_types=1);

require_once 'Product.php';

class Mariany extends Product
{
    public $expirationDate;

    public function __construct(DateTime $expirationDate, string $name = '', int $quantity = 1)
    {
        parent::__construct($name, $quantity);
        $this->expirationDate = $expirationDate;
    }
}
