<?php

require 'Tweeter.php';
require 'Google.php';
require 'Facebook.php';

class SocialMediaFacade
{
    public function share($url, $status)
    {
        switch ($url) {
            case 'facebook.com':
                $social = new Facebook();
                return $social->share($url);

                break;
            case 'tweeter.com':
                $social = new Tweeter();
                return $social->tweet($url, $status);

                break;
            case 'google.com':
                $social = new Google();
                return $social->share($url);

                break;
            default:
                return 'not ok';

                break;
        }
    }
}
