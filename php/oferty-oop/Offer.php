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
}







