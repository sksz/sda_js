<?php

declare(strict_types=1);

namespace Strategy;

class SwordAttackStrategy extends AbstractAttackStrategy
{
    public function attack()
    {
        return 'Atakuje przy pomocy miecza.';
    }
}
