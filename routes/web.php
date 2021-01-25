<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CatalogController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\ProductController;

Route::view('/', 'home')->name('home');
Route::view('/about-us', 'about-us', ['breadCrumbTitle' => 'About Us'])->name('aboutUs');

Route::get('/catalog', [CatalogController::class, 'list'])->name('catalog');