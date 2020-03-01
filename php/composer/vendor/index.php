<?php

declare(strict_types=1);

namespace Traits;

require_once('Text/Entry.php');
require_once('Text/Comment.php');
require_once('Media/Photo.php');
require_once('Media/Video.php');

use \Traits\Media\Photo;
use \Traits\Media\Video;
use \Traits\Text\Comment;
use \Traits\Text\Entry;

$entry = new Entry();
$comment = new Comment();
$photo = new Photo();
$video = new Video();

var_dump($entry, $comment, $photo, $video);
