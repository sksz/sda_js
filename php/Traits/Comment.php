<?php

declare(strict_types=1);

require_once('AbstractText.php');
require_once('ApprovalTrait.php');

class Comment extends AbstractText
{
    use ApprovalTrait;
}
