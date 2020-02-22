<?php

declare(strict_types=1);

require_once 'Product.php';

class Nulle extends Product
{
    public $format;
    public $monochromatic;

    public function __construct(string $name = '', int $quantity = 1, string $format = 'A4', bool $monochromatic = false)
    {
        parent::__construct($name, $quantity);
        $this->format = $format;
        $this->monochromatic = $monochromatic;
    }
}
