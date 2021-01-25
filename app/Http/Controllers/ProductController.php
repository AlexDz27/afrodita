<?php

namespace App\Http\Controllers;

class ProductController extends Controller
{
    public function list()
    {
        $product1 = new \stdClass();
        $product1->name = 'Cream NIVEA';
        $product1->description = 'Lorem iasdjasd kasd ask oas oksdak ak! Slkdkksdks kdskds olaodpsa.';

        $product2 = new \stdClass();
        $product2->name = 'Cream NIVEA 2';
        $product2->description = '2 Lorem iasdjasd kasd ask oas oksdak ak! Slkdkksdks kdskds olaodpsa. 2';

        $products = [$product1, $product2];

        return view('catalog.products', [
            'breadCrumbTitle' => 'Products',
            'products' => $products,
        ]);
    }
}
