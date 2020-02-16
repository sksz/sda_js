<?php

require_once 'Customer.php';

class ChaoticConsumer extends Customer
{
    public function getData()
    {
        return $this->getLastName();
    }
}

?>
