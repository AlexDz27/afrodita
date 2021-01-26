<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Service;

class CatalogController extends Controller
{
    public function list()
    {
        $services = Service::all();
        $products = Product::all();

        return view('catalog', [
            'breadCrumbTitle' => 'Catalog',
            'services' => $services,
            'products' => $products
        ]);
    }
}
