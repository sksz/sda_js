<?php

interface Shape
{
    public function display(int $x1, int $y1, int $x2, int $y2);
}

class RectangleAdapter implements Shape
{
    public function display(int $x1, int $y1, int $x2, int $y2)
    {
        $h = $y2 - $y1;
        $w = $x2 - $x1;

        $rectangle = new Rectangle();
        $rectangle->display($x1, $y1, $h, $w);
    }
}

class Rectangle
{
    public function display(int $x, int $y, int $h, int $w)
    {

    }
}

$test = new RectangleAdapter();

