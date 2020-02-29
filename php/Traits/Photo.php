<?php

declare(strict_types=1);

require_once('AbstractMedia.php');
require_once('ApprovalTrait.php');

class Photo extends AbstractMedia
{
    use ApprovalTrait;
}
