<?php

class Session {
    public function __construct($name = 'PHP_SESSSION') {
        session_name($name);
        session_start();
    }

    public function set($key, $value) {
        $_SESSION[$key] = $value;
    }

    public function get($key) {
        return $_SESSION[$key];
    }
}

class User {
    protected $session;

    public function __construct($session) {
        $this->session = $session;
    }

    public function setName($name) {
        $this->session->set('name', $name);
    }

    public function getName() {
        return $this->session->get('name');
    }
}

$session = new Session("MOJA_SESJA");
$user = new User($session);
$user->setName("moj_login");
echo $user->getName();
