<?php

declare(strict_types=1);

require_once('Shape.php');

class Rectangle extends Shape
{
    private $height;
    private $width;

    public function getHeight(): int
    {
        return $this->height;
    }

    public function setHeight(int $height): Rectangle
    {
        $this->height = $height;

        return $this;
    }

    public function getWidth(): int
    {
        return $this->width;
    }

    public function setWidth(int $width): Rectangle
    {
        $this->width = $width;

        return $this;
    }

    public function getArea(): int
    {
        return $this->height * $this->width;
    }
}
