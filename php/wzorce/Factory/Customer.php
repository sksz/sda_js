<?php

declare(strict_types=1);

class Customer
{
    public $status = 'basic';

    public $age;

    public function __construct(int $age)
    {
        $this->age = $age;
    }
}

?>
