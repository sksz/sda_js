<?php

declare(strict_types=1);

require_once 'Customer.php';
require_once 'ChaoticCustomer.php';
require_once 'GentleCustomer.php';

class CustomerFactory
{
    public const CHAOTIC = 'Chaotic';
    public const GENTLE = 'Gentle';
    private const CUSTOMER = 'Customer';

    public static function chooseCustomer(int $age, string $customerType = ''): Customer
    {
        $class = $customerType . self::CUSTOMER;
        return new $class($age);
    }
}
