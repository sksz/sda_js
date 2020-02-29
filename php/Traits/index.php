<?php

declare(strict_types=1);

require_once('Entry.php');
require_once('Comment.php');
require_once('Photo.php');
require_once('Video.php');

$entry = new Entry();
$comment = new Comment();
$photo = new Photo();
$video = new Video();

var_dump($entry, $comment, $photo, $video);
