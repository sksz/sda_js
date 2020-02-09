<?php
$doubleQuoted = 'double quoted';
echo <<<'DOC'
Ciekwe jest to, ze ta czesc dokumentacji
zachowuje sie\npodobnie do $doubleQuoted.
DOC;
?>
