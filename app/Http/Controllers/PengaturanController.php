<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class PengaturanController extends Controller
{
    public function show()
    {
        $akunAdmin = User::all();

        return Inertia::render('admin/Pengaturan', ['akunAdmin' => $akunAdmin]);
    }

    public function akunCreate()
    {
        $akunAdmin = User::all();

        if (count($akunAdmin) >= 5) {
            return redirect()->route('PengaturanAdmin')->with('error', 'Akun sudah mencapai batas maksimal!');
        }

        return Inertia::render('admin/akun/Create');
    }

    public function akunStore(Request $request)
    {
        $dataUser = $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'username' => 'required',
            'password' => 'required',
        ]);

        $dataUser['password'] = Hash::make($dataUser['password']);

        $createdUser = User::create($dataUser);

        if ($createdUser) {
            return redirect()->route('PengaturanAdmin')->with('success', 'Akun Admin Berhasil Dibuat!');
        } else {
            return redirect()->back()->with('error', 'Sever Error');
        }
    }

    public function akunEdit($id)
    {
        $dataUser = User::find($id);

        return Inertia::render('admin/akun/Edit', ['dataUser' => $dataUser]);
    }

    public function akunUpdate($id, Request $request)
    {
        $akun = User::findOrFail($id);

        $dataUser = $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'username' => 'required',
            'password' => 'required',
        ]);

        if ($akun->defaultPassword) {
            $dataUser['defaultPassword'] = false;
        }

        $dataUser['password'] = Hash::make($dataUser['password']);

        $updateUser = $akun->update($dataUser);

        if ($updateUser) {
            return redirect()->route('PengaturanAdmin')->with('success', 'Akun Admin Berhasil Diedit!');
        } else {
            return redirect()->back()->with('error', 'Sever Error');
        }
    }

    public function akunDelete($id)
    {
        $akun = User::findOrFail($id);

        $deleteAkun = $akun->delete();

        if ($deleteAkun) {
            return redirect()->back()->with('success', 'Akun Berhasil Dihapus');
        } else {
            return redirect()->back()->with('error', 'Sever Error');
        }
    }
}
