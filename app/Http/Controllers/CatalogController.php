<?php

namespace App\Http\Controllers;

use App\Models\Service;

class CatalogController extends Controller
{
    public function list()
    {
        $services = Service::all();

        return view('catalog', [
            'title' => 'Catalog',
            'services' => $services
        ]);
    }
}
