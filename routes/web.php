<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BeritaController;
use App\Http\Controllers\LandingPageController;
use App\Http\Controllers\PengaturanController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AnalyticsController;
use Inertia\Inertia;

Route::controller(LandingPageController::class)->group(function () {
    Route::get('/', 'index')->name('Beranda');
    Route::get('/welcome', 'welcome')->name('Welcome');
    Route::get('/profil', 'profil')->name('Profil');
    Route::get('/get_ms_db', 'get_ms_db')->name('getMsDb');
    Route::get('/kontak', 'kontak')->name('Kontak');
});

Route::controller(BeritaController::class)->group(function () {
    Route::get('/berita', 'showBerita')->name('Berita');
    Route::get('/berita/{slug}', 'readBerita')->name('BeritaRead');
});

// ADMIN

Route::prefix('admin')->controller(AuthController::class)->group(function () {
    Route::get('/login', 'loginPage')->middleware('guest')->name('LoginAdminPage');
    Route::post('/login', 'login')->middleware('guest')->name('LoginAdmin');
    Route::get('/logout', 'logout')->middleware('auth')->name('LogoutAdmin');
});

Route::prefix('admin')->middleware('auth')->group(function () {
    Route::controller(AdminController::class)->group(function () {
        Route::get('/', 'dashboard')->name('AdminDashboard');
        Route::get('/halaman/profil', 'halamanProfil')->name('AdminHalamanProfil');
        Route::post('/halaman/profil', 'updateHalamanProfil')->name('AdminUpdateHalamanProfil');
        Route::get('/halaman/beranda', 'halamanBeranda')->name('AdminHalamanBeranda');
        Route::post('/halaman/beranda', 'updateHalamanBeranda')->name('AdminUpdateHalamanBeranda');
    });
    Route::controller(BeritaController::class)->group(function () {
        Route::get('/berita', 'showAdmin')->name('BeritaIndexAdmin');
        Route::get('/berita/buat', 'create')->name('BeritaCreateAdmin');
        Route::post('/berita/buat', 'store')->name('BeritaStoreAdmin');
        Route::post('/berita/delete/{id}', 'destroy')->name('BeritaDeleteAdmin');
        Route::get('/berita/edit/{id}', 'edit')->name('BeritaEditAdmin');
        Route::post('/berita/edit/{id}', 'update')->name('BeritaUpdateAdmin');
    });
    Route::controller(PengaturanController::class)->group(function () {
        Route::get('/pengaturan', 'show')->name('PengaturanAdmin');
        Route::get('/akun/create', 'akunCreate')->name('AkunAdminCreate');
        Route::post('/akun/create', 'akunStore')->name('AkunAdminStore');
        Route::post('/akun/{id}', 'akunDelete')->name('AkunAdminDelete');
        Route::get('/akun/edit/{id}', 'akunEdit')->name('AkunAdminEdit');
        Route::put('/akun/edit/{id}', 'akunUpdate')->name('AkunAdminUpdate');
    });
});