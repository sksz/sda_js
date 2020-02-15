<?php
$var = ['wl1' => 5, 'wl2' => 'test'];
$cast = (object) $var;
var_dump($var, $cast);
