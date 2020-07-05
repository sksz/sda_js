<?php

namespace Strategy\Tests;

use PHPUnit\Framework\TestCase;
use Strategy\Hero;

class HeroTest extends TestCase
{
    public function dataTestAttack()
    {
        return [
            'Atak mieczem' => [
                'equipment' => 'Sword',
                'expected' => 'Atakuje przy pomocy miecza.'
            ],
            'Atak łukiem' => [
                'equipment' => 'Bow',
                'expected' => 'Atakuje przy pomocy łuku.'
            ],
        ];
    }

    /**
     * @dataProvider dataTestAttack
     */
    public function testAttack($equipment, $expected)
    {
        $hero = new Hero($equipment);

        $this->assertSame($expected, $hero->attack());
    }

    public function dataStrategyNotFound()
    {
        return [
            'Atak młotem' => [
                'equipment' => 'Hammer',
                'expectedException' => \Exception::class,
            ],
        ];
    }

    /**
     * @dataProvider dataStrategyNotFound
     */
    public function testStrategyNotFound($equipment, $expectedException)
    {
        $this->expectException($expectedException);

        $hero = new Hero($equipment);

        $hero->attack();
    }
}
