<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class AdminController extends Controller
{
    public function dashboard()
    {
        $products = Product::all();

        return view('admin.dashboard', [
            'breadCrumbTitle' => 'Dashboard',
            'products' => $products
        ]);
    }

    public function editProduct($id, Request $request)
    {
        $product = Product::find($id) ?? throw new NotFoundHttpException();

        if ($request->isMethod('post')) {
            $product->name = $request->input('name');
            $product->description = $request->input('description');
            $product->attributes = $request->input('attributes');

            $product->save();

            return back();
        }

        return view('admin.edit-product', [
            'breadCrumbTitle' => "Editing {$product->name}",
            'product' => $product
        ]);
    }
}
