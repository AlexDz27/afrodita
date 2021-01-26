<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CatalogController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\AdminController;

// Pages
Route::view('/', 'home')->name('home');
Route::view('/about-us', 'about-us', ['breadCrumbTitle' => 'About Us'])->name('aboutUs');

// Catalog pages
Route::get('/catalog', [CatalogController::class, 'list'])->name('catalog');
Route::prefix('catalog')->group(function () {
    Route::get('/services', [ServiceController::class, 'list'])->name('services');
    Route::get('/services/{id}', [ServiceController::class, 'show'])->name('servicesShow');

    Route::get('/products', [ProductController::class, 'list'])->name('products');
    Route::get('/products/{id}', [ProductController::class, 'show'])->name('productsShow');
});

// Admin
Route::prefix('admin')->group(function () {
    Route::get('/dashboard', [AdminController::class, 'dashboard'])->name('dashboard');
    // TODO: route action to edit product
});