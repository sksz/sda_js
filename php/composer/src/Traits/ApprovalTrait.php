<?php

namespace Traits\Traits;

use Monolog\Logger;
use Monolog\Handler\StreamHandler;

trait ApprovalTrait
{
    public $test = 1;

    public function logSomething()
    {
        $logger = new Logger('Traits');
        $logger->pushHandler(new StreamHandler('var/log/dev.log', Logger::DEBUG));

        $logger->warning('Foo');
        $logger->error('Bar');
        $logger->info('Grazyna', [
            'wiek' => 2341,
        ]);
    }
}
