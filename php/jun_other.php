<?php

$countries = ['Russia', 'Italy', 'Egypt', 'Norway'];

$serializedCountries = serialize($countries);
var_dump($serializedCountries);

$unserializedCountries = unserialize($serializedCountries);
var_dump($unserializedCountries);

$jsonEncodedCountries = json_encode($countries);
var_dump($jsonEncodedCountries);

$jsonDecodedCountries = json_decode($jsonEncodedCountries);
var_dump($jsonDecodedCountries);

?>
