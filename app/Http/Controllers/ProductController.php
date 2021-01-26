<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class ProductController extends Controller
{
    public function list()
    {
        $products = Product::all();

        return view('catalog.products', [
            'breadCrumbTitle' => 'Products',
            'products' => $products,
        ]);
    }

    public function show($id)
    {
        $product = Product::find($id) ?? throw new NotFoundHttpException();

        return view('catalog.product', [
            'breadCrumbTitle' => $product->name,
            'product' => $product
        ]);
    }
}
