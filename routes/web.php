<?php

use App\Http\Controllers\CatalogController;
use Illuminate\Support\Facades\Route;

Route::view('/', 'home')->name('home');
Route::view('/about-us', 'about-us', ['title' => 'About Us'])->name('aboutUs');
Route::get('/catalog', [CatalogController::class, 'list'])->name('catalog');