<?php

use App\Http\Controllers\CatalogSearchController;
use Illuminate\Support\Facades\Route;

Route::get('/search', [CatalogSearchController::class, 'show']);
