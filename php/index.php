<?php

declare(strict_types=1);

require_once 'Customer.php';
require_once 'ChaoticConsumer.php';
require_once 'GentleCustomer.php';

$customer = new Customer();
$customer2 = new ChaoticConsumer();
$customer3 = new GentleCustomer();

$customer->name = 'Kasia';
$customer2->name = 'Jan';
$customer3->name = 'Maciej';
$customer->setLastName('Janowska')->setAge(2003);
$customer2->setLastName('Kowalski')->setAge(10);
$customer3->setLastName('Nuwocki')->setAge(44);

$customer->askForDiscount();
$customer2->askForDiscount();
$customer3->askForDiscount();

?>
