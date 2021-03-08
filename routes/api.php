<?php

use App\Http\Controllers\CatalogSearchController;
use App\Http\Controllers\BookingController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\OrdersController;

Route::get('/search', [CatalogSearchController::class, 'show']);

Route::post('/booking-submit', [BookingController::class, 'submit']);

Route::post('/order-submit', [OrdersController::class, 'submit']);