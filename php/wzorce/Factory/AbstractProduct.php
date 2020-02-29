<?php

declare(strict_types=1);

abstract class AbstractProduct
{
    protected $price;

    abstract function order();

    public function setPrice(int $price): void
    {
        $this->price = $price;
    }

    public function getPrice(): ?int
    {
        return $this->price;
    }
}
