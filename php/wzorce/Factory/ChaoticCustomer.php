<?php

declare(strict_types=1);

require_once 'Customer.php';
require_once 'CustomerInterface.php';

class ChaoticCustomer extends Customer implements CustomerInterface
{
    public static function askForRenew(int $period)
    {
        echo 'no';
    }
}

?>
