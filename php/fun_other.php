<?php

$countries = ['Russia', 'Italy', 'Egypt', 'Norway'];

$serializedCountries = serialize($countries);
var_dump($serializedCountries);

$unserializedCountries = unserialize($serializedCountries);
var_dump($unserializedCountries);

$jsonEncodedCountries = json_encode($countries);
var_dump($jsonEncodedCountries);

$jsonEncodedCountries .= 'aaa';

$jsonDecodedCountries = json_decode($jsonEncodedCountries);
var_dump($jsonDecodedCountries);

var_dump(json_last_error());
var_dump(json_last_error_msg());

?>
