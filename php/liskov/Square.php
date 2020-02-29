<?php

declare(strict_types=1);

require_once('Shape.php');

class Square extends Shape
{
    private $side;

    public function getSide(): int
    {
        return $side;
    }

    public function setSide(int $size): Square
    {
        $this->side = $size;

        return $this;
    }

    public function getArea(): int
    {
        return $this->side ** 2;
    }
}
