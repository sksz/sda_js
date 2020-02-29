<?php

declare(strict_types=1);

require_once 'GentleCustomer.php';
// require_once 'CustomerFactory.php';
// require_once 'Hosting.php';

var_dump(new GentleCustomer(10));
GentleCustomer::askForRenew(1);

// var_dump(new Hosting());

// $customer = CustomerFactory::chooseCustomer(10);
// $chaotic = CustomerFactory::chooseCustomer(20, CustomerFactory::CHAOTIC);
// $gentle = CustomerFactory::chooseCustomer(30, CustomerFactory::GENTLE);

// var_dump($customer, $chaotic, $gentle);
