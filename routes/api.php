<?php

use App\Http\Controllers\CatalogSearchController;
use App\Http\Controllers\BookingController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CartController;

Route::get('/search', [CatalogSearchController::class, 'show']);

Route::post('/booking-submit', [BookingController::class, 'submit']);

Route::post('/cart-submit', [CartController::class, 'submit']);