<?php

class myIterator implements OuterIterator {
    private $position = 0;
    private $array;

    public function __construct() {
        $this->position = 0;
    }

    public function setArray($array)
    {
        $this->array = $array;
    }

    public function getInnerIterator()
    {
        return parent;
    }

    public function rewind() {
        var_dump(__METHOD__);
        $this->position = 0;
    }

    public function current() {
        var_dump(__METHOD__);
        return $this->array[$this->position];
    }

    public function key() {
        var_dump(__METHOD__);
        return $this->position;
    }

    public function next() {
        var_dump(__METHOD__);
        ++$this->position;
    }

    public function valid() {
        var_dump(__METHOD__);
        return isset($this->array[$this->position]);
    }
}

$it = new myIterator;

$it->setArray(['Jan', 'Kowalski', 'Maria', 'Jopek']);

foreach($it as $key => $value) {
    var_dump($key, $value);
    echo "\n";
}
?>
