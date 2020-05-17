<?php

class CountMe
{
    protected $_myCount = 3;

    public function count()
    {
        return $this->_myCount;
    }
}

$countable = new CountMe();
echo count($countable); //result is "1", not as expected

//Example Two, GOOD :)

class CountMe2 implements Countable
{

    protected $_myCount = 3;

    public function count()
    {
        return $this->_myCount;
    }

}

$countable = new CountMe2();
echo count($countable); //result is "3" as expected
