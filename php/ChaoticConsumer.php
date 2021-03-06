<?php

declare(strict_types=1);

require_once 'Customer.php';

class ChaoticConsumer extends Customer
{
    public function getData()
    {
        return $this->getLastName();
    }

    public function getDiscount(): int
    {
        return 5;
    }

    public function askForDiscount(): void
    {
        echo 'Jam jest ' .
            $this->name .
            ' ' .
            $this->getLastName() .
        ' i mam żólty krawat. Dostanę zniżkę?', PHP_EOL;
    }
}

?>
