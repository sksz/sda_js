<?php

declare(strict_types=1);

namespace Traits;

require 'vendor/autoload.php';

use \Traits\Media\Photo;
use \Traits\Media\Video;
use \Traits\Text\Comment;
use \Traits\Text\Entry;

$entry = new Entry();
$comment = new Comment();
$photo = new Photo();
$video = new Video();

var_dump($entry, $comment, $photo, $video);
