<?php

require_once 'ChaoticConsumer.php';

$customer = new Customer();
$customer2 = new ChaoticConsumer();

// var_dump(get_class($customer));
// var_dump(get_class($customer2));

$customer->name = 'Kasia';
$customer2->name = 'Jan';
$customer2->setLastName('asd')->setAge(10);

echo $customer->name;

echo $customer2->getData();

// var_dump(get_class_methods('Customer'));
// var_dump(get_class_methods($customer));

// var_dump($customer);
// var_dump($customer2)

?>
