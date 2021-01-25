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

    public function show($id)
    {
        $service = Service::find($id);

        return view('catalog.service', [
            'breadCrumbTitle' => $service->name,
            'service' => $service
        ]);
    }
}
