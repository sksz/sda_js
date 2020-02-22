<?php

declare(strict_types=1);

require_once 'Service.php';

abstract class Offer
{
    private $name;
    private $type;

    public function __construct(string $name = '', string $type = '')
    {
        $this->name = $name;
        $this->type = $type;
    }

    public function __destruct()
    {
        echo $this->sayGoodbye() . PHP_EOL;
    }

    public function __invoke(int $testArgument)
    {
        echo 'test invoke: ' . $testArgument . PHP_EOL;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function setName(string $name): Offer
    {
        $this->name = $name;

        return $this;
    }

    public function getType(): string
    {
        return $this->type;
    }

    public function setType(string $type): Offer
    {
        $this->type = $type;

        return $this;
    }

    abstract public function sayGoodbye();
}







