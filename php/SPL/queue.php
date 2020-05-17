<?php

$testQueue = new SplStack();
// $testQueue = new SplQueue();

$testQueue->push('test1');
$testQueue->push('test2');
$testQueue->push('test3');
$testQueue->push('test4');

var_dump($testQueue);

$tmp = $testQueue->pop();

var_dump($tmp);

var_dump($testQueue->count());

$testQueue->rewind();

$tmp2 = $testQueue->current();

var_dump($tmp2);

$testQueue->next();

$tmp3 = $testQueue->current();

var_dump($tmp3);
