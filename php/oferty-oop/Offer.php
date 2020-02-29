<?php

declare(strict_types=1);

abstract class Offer
{
    public $name;
    public $type;

    public function __construct(string $name = '', string $type = '')
    {
        $this->name = $name;
        $this->type = $type;
    }

    public static function getClassName(): void
    {
        echo $this->name;
        echo 'Jestem klasą ' . get_called_class() . '.' . PHP_EOL;
    }
}







