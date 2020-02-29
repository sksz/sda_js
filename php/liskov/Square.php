<?php

declare(strict_types=1);

require_once('Rectangle.php');

class Square extends Rectangle
{
    public function setHeight(int $height): Rectangle
    {
        parent::setHeight($height);
        parent::setWidth($height);

        return $this;
    }

    public function setWidth(int $width): Rectangle
    {
        parent::setWidth($width);
        parent::setHeight($width);

        return $this;
    }
}
