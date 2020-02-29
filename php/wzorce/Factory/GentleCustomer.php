<?php

declare(strict_types=1);

require_once 'Customer.php';
require_once 'CustomerInterface.php';

class GentleCustomer extends Customer implements CustomerInterface
{
    public function __construct(int $age)
    {
        parent::__construct($age);
        $this->status = 'premium';
    }

    public static function askForRenew(int $period)
    {
        echo 'yes';
    }
}

?>
