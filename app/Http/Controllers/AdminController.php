<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

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
}
