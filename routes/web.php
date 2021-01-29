<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CatalogController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\SearchController;

// Pages
Route::view('/', 'pages.home')->name('home');
Route::view('/about-us', 'pages.about-us', ['breadCrumbTitle' => 'About Us'])->name('aboutUs');

// Catalog pages
Route::get('/catalog', [CatalogController::class, 'list'])->name('catalog');
Route::prefix('catalog')->group(function () {
    Route::get('/services', [ServiceController::class, 'list'])->name('services');
    Route::get('/services/{id}', [ServiceController::class, 'show'])->name('servicesShow');

    Route::get('/products', [ProductController::class, 'list'])->name('products');
    Route::get('/products/{id}', [ProductController::class, 'show'])->name('productsShow');
});

// Search
Route::get('/search', [SearchController::class, 'show']);

// Admin
Route::prefix('admin')->middleware('admin.auth')->group(function () {
    Route::get('/dashboard', [AdminController::class, 'dashboard'])->name('dashboard');

    Route::get('/products/edit/{id}', [AdminController::class, 'editProduct'])->name('editProduct');
    Route::post('/products/edit/{id}', [AdminController::class, 'editProduct']);
});