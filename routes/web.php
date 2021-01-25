<?php

use Illuminate\Support\Facades\Route;

Route::view('/', 'home')->name('home');
Route::view('/about-us', 'about-us', ['title' => 'About Us'])->name('aboutUs');
Route::view('/catalog', 'catalog', ['title' => 'Catalog'])->name('catalog');