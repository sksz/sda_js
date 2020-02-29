<?php

declare(strict_types=1);

namespace Traits\Media;

require_once('AbstractMedia.php');
require_once('Traits/ApprovalTrait.php');

use \Traits\Traits\ApprovalTrait as AprTrait;

class Photo extends AbstractMedia
{
    use AprTrait;
}
