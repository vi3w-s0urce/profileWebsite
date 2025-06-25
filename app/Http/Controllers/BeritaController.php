<?php

namespace App\Http\Controllers;

use App\Models\Berita;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class BeritaController extends Controller
{
    public function showBerita()
    {
        $berita = Berita::orderBy('created_at', 'desc')->get();

        return Inertia::render('Berita', ['berita' => $berita]);
    }

    public function showAdmin()
    {
        $berita = Berita::orderBy('created_at', 'desc')->get();

        return Inertia::render('admin/berita/Index', ['berita' => $berita]);
    }

    public function create()
    {
        return Inertia::render('admin/berita/Create');
        
    }
    public function store(Request $request)
    {
        $dataBerita = $request->validate([
            'judul' => 'required',
            'kategori' => 'required',
            'gambar' => 'required|image|mimes:jpeg,jpg,png,webp|max:10000',
            'content' => 'required|json',
        ]);

        $imageName = md5($request->gambar . microtime()) . '.' . $request->gambar->extension();

        $moveFile = $request->file('gambar')->storeAs('public/beritaImages', $imageName);

        if ($moveFile) {
            $dataBerita["gambar"] = $imageName;
        } else {
            return redirect()->back()->with('error', 'Sever Error');
        }

        $dataBerita["pengunjung"] = 0;

        $slug = $dataBerita['judul'];
        $slug = strtolower(implode('-', explode(' ', $slug)));

        $originalSlug = $slug;
        $counter = 1;

        while (Berita::where('slug', $slug)->exists()) {
            $slug = $originalSlug . '_' . $counter;
            $counter++;
        }

        $dataBerita["slug"] = $slug;

        $createdData = Berita::create($dataBerita);

        if ($createdData) {
            return redirect()->route('BeritaIndexAdmin')->with('success', 'Berita Berhasil Dibuat!');
        } else {
            return redirect()->back()->with('error', 'Sever Error');
        }
    }

    public function destroy($id)
    {
        $berita = Berita::findOrFail($id);

        $gambarPath = 'public/beritaImages/' . $berita->gambar;

        if (Storage::exists($gambarPath)) {
            Storage::delete($gambarPath);
        }

        $deleteBerita = $berita->delete();

        if ($deleteBerita) {
            return redirect()->back()->with('success', 'Berita Berhasil Dihapus');
        } else {
            return redirect()->back()->with('error', 'Sever Error');
        }
    }

    public function readBerita($slug)
    {
        $berita = Berita::where('slug', $slug)->first();

        $berita->increment('pengunjung', 1);

        $beritaLainnya = Berita::where('id', '!=', $berita->id)->limit(3)->get();

        return Inertia::render('ShowBerita', ['berita' => $berita, 'beritaLainnya' => $beritaLainnya]);
    }

    public function edit($id)
    {
        $berita = Berita::where('id', $id)->first();

        return Inertia::render('admin/berita/Edit', ['berita' => $berita]);
    }

    public function update($id, Request $request)
    {
        $berita = Berita::findOrFail($id);

        $dataBerita = $request->validate([
            'judul' => 'required',
            'kategori' => 'required',
            'content' => 'required|json',
        ]);

        $slug = $dataBerita['judul'];
        $slug = strtolower(implode('-', explode(' ', $slug)));

        $originalSlug = $slug;
        $counter = 1;

        while (Berita::where('slug', $slug)->exists()) {
            $slug = $originalSlug . '_' . $counter;
            $counter++;
        }

        $dataBerita["slug"] = $slug;

        if ($request->gambar) {
            $imageName = md5($request->gambar . microtime()) . '.' . $request->gambar->extension();

            $moveFile = $request->file('gambar')->storeAs('public/beritaImages', $imageName);

            if ($moveFile) {
                $dataBerita["gambar"] = $imageName;

                $gambarPath = 'public/beritaImages/' . $berita->gambar;

                if (Storage::exists($gambarPath)) {
                    Storage::delete($gambarPath);
                }
            } else {
                return redirect()->back()->with('error', 'Sever Error');
            }
        }

        $updateBerita = $berita->update($dataBerita);

        if ($updateBerita) {
            return redirect()->route('BeritaIndexAdmin')->with('success', 'Berita Berhasil Diedit!');
        } else {
            return redirect()->back()->with('error', 'Sever Error');
        }
    }
}
