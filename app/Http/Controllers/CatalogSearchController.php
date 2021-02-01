<?php

namespace App\Http\Controllers;

use App\Services\CatalogSearchService;
use Illuminate\Support\Facades\Request;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class CatalogSearchController extends Controller
{
    public function show(CatalogSearchService $service)
    {
        $type = Request::input('type') ?? 'web';
        $query = Request::input('query');

        if (is_null($query)) {
            throw new BadRequestHttpException('Query string must not be empty.');
        }

        return $service->search($type, $query)->getAppropriateResponse();
    }
}
