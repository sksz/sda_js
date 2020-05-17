<?php

class MyException extends Exception
{}

function testFunction2()
{
    testFunction();
}

function testFunction()
{
    throw new Exception('Ogólny wyjątek', 0);
}

try {
    // testFunction2();
    // throw new Exception('Ogólny wyjątek', 0);
    throw new MyException('Mój wyjątek', 1);
} catch (MyException $exception) {
    var_dump($exception);
    // var_dump($exception->getPrevious());
} catch (Exception $exception) {
    var_dump($exception);
    throw new MyException('test2', 11, $exception);
} finally {
    var_dump('finally');
}
