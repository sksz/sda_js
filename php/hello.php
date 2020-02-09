<?php
    echo("Hello, world!\n");
?>

To jest część poza PHP.
<?php
echo "Goodbye, world!\n\n";

// include('./testImport.php');
include_once('./testImport.php');
include_once('./testImport.php');

// require('testImport2.php');
require_once('testImport2.php');
require_once('testImport2.php');
