<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Beranda');
})->name('Beranda');

Route::get('/profil', function () {
    return Inertia::render('Profil');
})->name('Profil');

Route::get('/berita', function () {
    return Inertia::render('Berita');
})->name('Berita');

Route::get('/kontak', function () {
    return Inertia::render('Kontak');
})->name('Kontak');

Route::get('/show-berita', function () {
    return Inertia::render('ShowBerita');
})->name('ShowBerita');

// ADMIN
Route::get('/admin/login', function () {
    return Inertia::render('admin/Login');
})->name('AdminDashboard');

Route::get('/admin', function () {
    return Inertia::render('admin/Dashboard');
})->name('AdminDashboard');

Route::get('/admin/halaman/beranda', function () {
    return Inertia::render('admin/HalamanBeranda');
})->name('HalamanBeranda');

Route::get('/admin/halaman/profil', function () {
    return Inertia::render('admin/HalamanProfil');
})->name('HalamanProfil');

Route::get('/admin/berita', function () {
    return Inertia::render('admin/berita/Index');
})->name('BeritaIndex');

Route::get('/admin/berita/create', function () {
    return Inertia::render('admin/berita/Create');
})->name('BeritaCreate');