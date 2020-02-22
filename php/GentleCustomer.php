<?php

declare(strict_types=1);

require_once 'Customer.php';

class GentleCustomer extends Customer
{
    public function getData()
    {
        return $this->getLastName();
    }

    public function getDiscount(): int
    {
        return 10;
    }

    public function askForDiscount(): void
    {
        echo 'Nazywam się ' .
            $this->name .
            ' ' .
            $this->getLastName() .
        ' i uprzejmie proszę o zniżkę?', PHP_EOL;
    }
}

?>
