<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CatalogController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\CatalogSearchController;

// Pages
Route::view('/', 'pages.home')->name('home');
Route::view('/about-us', 'pages.about-us', ['breadCrumbTitle' => 'About Us'])->name('aboutUs');

// Catalog
Route::prefix('catalog')->name('catalog.')->group(function () {
    Route::get('/', [CatalogController::class, 'list'])->name('catalog');

    Route::prefix('services')->group(function () {
        Route::get('/', [ServiceController::class, 'list'])->name('services');
        Route::get('/{id}', [ServiceController::class, 'show'])->name('servicesShow');
    });

    Route::prefix('products')->group(function () {
        Route::get('/', [ProductController::class, 'list'])->name('products');
        Route::get('/{id}', [ProductController::class, 'show'])->name('productsShow');
    });
});

// Search
Route::get('/search', [CatalogSearchController::class, 'show']);

// Admin
Route::prefix('admin')->middleware('admin.auth')->group(function () {
    Route::get('/dashboard', [AdminController::class, 'dashboard'])->name('dashboard');

    Route::get('/products/edit/{id}', [AdminController::class, 'editProduct'])->name('editProduct');
    Route::post('/products/edit/{id}', [AdminController::class, 'editProduct']);
});