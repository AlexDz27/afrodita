<?php

use App\Http\Controllers\CatalogSearchController;
use App\Http\Controllers\BookingController;
use Illuminate\Support\Facades\Route;

Route::get('/search', [CatalogSearchController::class, 'show']);

Route::post('/booking-submit', [BookingController::class, 'submit']);
