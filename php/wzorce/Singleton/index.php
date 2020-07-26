<?php

class Connection
{
    private static $instance;

    public static function getInstance(): Connection
    {
        if (static::$instance === null) {
            static::$instance = new Connection();
        }

        return static::$instance;
    }
}

var_dump(Connection::getInstance());
var_dump(Connection::getInstance());
var_dump(Connection::getInstance());
var_dump(Connection::getInstance());
