<?php

declare(strict_types=1);

namespace Traits\Text;

require_once('AbstractText.php');
require_once('Traits/ApprovalTrait.php');

class Comment extends AbstractText
{
    use \Traits\Traits\ApprovalTrait;
}
