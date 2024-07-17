<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function loginPage()
    {
        return Inertia::render('admin/Login');
    }

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'username' => 'required',
            'password' => 'required'
        ]);

        if (!Auth::attempt($credentials)) {
            return redirect()->back()->with('error', 'Username dan Password Salah!');
        }

        return redirect()->route('AdminDashboard')->with('success', 'Selamat Datang di Halaman Admin');
    }

    public function logout(Request $request) {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect()->route('LoginAdminPage')->with('success', 'Berhasil Keluar Dari Halaman Admin');
    }
}
