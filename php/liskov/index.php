<?php

declare(strict_types=1);

require_once('Rectangle.php');
require_once('Square.php');
require_once('Shape.php');

function getArea(Shape $shape): int
{
    return $shape->getArea();
}

$rectangle = new Rectangle();
$rectangle->setWidth(2)->setHeight(3);

$square = new Square();
$square->setSide(3);

var_dump(getArea($rectangle), getArea($square));
