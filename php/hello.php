<?php
    echo("Hello, world!\n");
?>

To jest część poza PHP.
<?php
/**
 * Komentarz wieloliniowy (Multi-Line)
 */
echo "Goodbye, world!\n\n";

// Komentarz w stylu C++
// include('./testImport.php');
include_once('./testImport.php');
include_once('./testImport.php');

# Komentarz Shell-like
# require('testImport2.php');
require_once('testImport2.php');
require_once('testImport2.php');
