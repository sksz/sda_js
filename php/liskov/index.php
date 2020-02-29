<?php

declare(strict_types=1);

require_once('Rectangle.php');
require_once('Square.php');

function getArea(Rectangle $rectangle): int
{
    $rectangle
        ->setHeight(2)
        ->getHeight(3);

    return $rectangle->getArea();
}

$rectangle = new Rectangle();
$rectangle->setWidth(2)->setHeight(3);

$square = new Square();
$square->setWidth(2)->setHeight(3);

// var_dump($rectangle, $square);

var_dump(getArea($rectangle), getArea($square));
