<?php

declare(strict_types=1);

require_once 'Product.php';
require_once 'SalesManTrait.php';

class Mariany extends Product
{
    use SalesManTrait;

    public $expirationDate;

    public function __construct(DateTime $expirationDate, string $name = '', int $quantity = 1)
    {
        parent::__construct($name, $quantity);
        $this->expirationDate = $expirationDate;
    }
}
