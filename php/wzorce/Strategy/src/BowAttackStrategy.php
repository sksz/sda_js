<?php

declare(strict_types=1);

namespace Strategy;

class BowAttackStrategy extends AbstractAttackStrategy
{
    public function attack()
    {
        return 'Atakuje przy pomocy łuku.';
    }
}
