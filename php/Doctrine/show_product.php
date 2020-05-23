<?php

require_once "bootstrap.php";

$id = $argv[1];

// Użycie bezpośrednio EM do wybrania danych bez pobierania repozytorium
// $product = $entityManager->find('Product', $id);

// Pobranie repozytorium z EM i użycie go do wybrania danych
$productRepository = $entityManager->getRepository('Product');
$product = $productRepository->find($id);

if ($product === null) {
    echo "No product found.\n";
    exit(1);
}

echo sprintf("-%s\n", $product->getName());
