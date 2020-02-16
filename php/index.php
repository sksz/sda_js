<?php

require_once 'ChaoticConsumer.php';

$customer = new Customer();
$customer2 = new Customer();

$a = -1;

$customer->name = 'Kasia';
$customer2->name = 'Jan';
echo $customer->setLastName('asd')->setAge(10)->getLastName();

echo $customer->name;

echo $customer2->getDiscount();

var_dump(get_class_methods('Customer'));
var_dump(get_class_methods($customer));

var_dump($customer);
var_dump($customer2)

?>
