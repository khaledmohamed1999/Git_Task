<?php
function getProducts()
{
    $products = [];
    $file = fopen('./data/products.csv', 'r') or die();
    while (!feof($file)) {
        $line = fgets($file);
        $arr = explode(',', $line);
        $product = [
            'id' => $arr[0],
            'name' => $arr[1],
            'image' => $arr[2],
            'price' => (float) $arr[3],
            'discount' => (float) $arr[4],
            'rating' => (float) $arr[5],
            'is_featured' => (bool) $arr[7],
            'rating_count' => (int) $arr[6],
            'is_recent' => (bool) $arr[8]
        ];
        array_push($products, $product);
    }
    fclose($file);
    return $products;
}