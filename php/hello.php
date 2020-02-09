<?php
    echo("Hello, world!\n");
?>

To jest część poza PHP.
<?php
/**
 * Komentarz wieloliniowy (Multi-Line)
 */
echo "Goodbye, world!\n\n";
echo 'Oto tekst
zlozony z kilku linii.';

// prefiksowanie cydzysłowów
echo "aaa\b\taaa\n ' \"\n";
echo 'Dodajemy \'apostrof\' do stringa.';
echo "\n\n";

$zmienna = 'test';

echo "Zmienna to $zmienna\n\n";

// Komentarz w stylu C++
// include('./testImport.php');
include_once('./testImport.php');
include_once('./testImport.php');

# Komentarz Shell-like
# require('testImport2.php');
require_once('testImport2.php');
require_once('testImport2.php');
