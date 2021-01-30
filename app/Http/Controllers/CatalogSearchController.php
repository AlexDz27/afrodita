<?php

namespace App\Http\Controllers;

use App\Services\CatalogSearchService;

class CatalogSearchController extends Controller
{
    public function show(CatalogSearchService $service)
    {
        return $service->search()->getAppropriateResponse();
    }
}
