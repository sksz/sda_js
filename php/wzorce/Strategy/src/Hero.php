<?php

declare(strict_types=1);

namespace Strategy;

class Hero
{
    private $equipment;

    private $strategy;

    public function __construct(string $equipment)
    {
        $this->equipment = $equipment;

        $strategy = '\\Strategy\\' . $equipment . 'AttackStrategy';

        if (!class_exists($strategy)) {
            throw new \Exception('Strategia nie istnieje');
        }

        $this->strategy = new $strategy();
    }

    public function attack()
    {
        return $this->strategy->attack();
    }
}
