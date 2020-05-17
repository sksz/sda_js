<?php

class MyIterator implements OuterIterator, Countable {
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

    public function count()
    {
        return count($this->array);
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

$it = new MyIterator();

$it->setArray(['Jan', 'Kowalski', 'Maria', 'Jopek']);

var_dump(count($it));

foreach($it as $key => $value) {
    var_dump($key, $value);
    echo "\n";
}

var_dump(class_implements(get_class($it)));
?>
