<?php

declare(strict_types=1);

namespace Traits\Media;

use Traits\Media\AbstractMedia;
use Traits\Traits\ApprovalTrait;

class Photo extends AbstractMedia
{
    use ApprovalTrait;
}
