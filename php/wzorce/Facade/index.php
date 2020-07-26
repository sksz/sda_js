<?php

require 'SocialMediaFacade.php';

$socialMedia = new SocialMediaFacade();

$result = $socialMedia->share('tweeter.com', 'ok');

var_dump($result);
