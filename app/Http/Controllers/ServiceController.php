<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

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
        $service = Service::find($id) ?? throw new NotFoundHttpException();

        return view('catalog.service', [
            'breadCrumbTitle' => $service->name,
            'service' => $service
        ]);
    }
}
