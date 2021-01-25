<?php

namespace App\Http\Controllers;

use App\Models\Service;

class ServiceController extends Controller
{
    public function list()
    {
        $services = Service::all();

        return view('catalog.services', [
            'breadCrumbTitle' => 'Services',
            'services' => $services
        ]);
    }
}
