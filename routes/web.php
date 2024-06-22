<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Beranda');
})->name('Beranda');

Route::get('/profil', function () {
    return Inertia::render('Profil');
})->name('Profil');
