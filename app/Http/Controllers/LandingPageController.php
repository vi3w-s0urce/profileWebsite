<?php

namespace App\Http\Controllers;

use App\Models\Berita;
use App\Models\CarouselBerita;
use App\Models\HalamanBeranda;
use App\Models\HalamanProfil;
use App\Models\MediaSocial;
use App\Models\Penghargaan;
use App\Models\Riwayat;
use App\Models\SectionContent;
use App\Models\Youtube;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LandingPageController extends Controller
{
    public function index(Request $request)
    {
        $hero_section_db = SectionContent::whereIn('type', ['subJudulBeranda', 'judulBeranda'])->get();
        $carousel_berita_db = CarouselBerita::with('Berita')->get();
        $profil_1_db = SectionContent::where('type', 'profil_1')->first();
        $berita_db = Berita::orderBy('created_at', 'desc')->limit(4)->get();
        $youtube_db = Youtube::all();
        $media_social_db = MediaSocial::all();

        return Inertia::render('Beranda', [
            'hero_section_db' => $hero_section_db,
            'carousel_berita_db' => $carousel_berita_db,
            'profil_1_db' => $profil_1_db,
            'berita_db' => $berita_db,
            'youtube_db' => $youtube_db,
            'media_social_db' => $media_social_db,
        ]);
    }

    public function welcome() {
        return Inertia::render('Welcome');
    }

    public function profil()
    {
        $profil_1_db = SectionContent::where('type', 'profil_1')->first();
        $profil_2_db = SectionContent::where('type', 'profil_2')->first();
        $riwayat_pendidikan_db = Riwayat::where('type', 'pendidikan')->get();
        $riwayat_pekerjaan_db = Riwayat::where('type', 'pekerjaan')->get();
        $riwayat_organisasi_db = Riwayat::where('type', 'organisasi')->get();

        $penghargaan_db = Penghargaan::all();

        return Inertia::render('Profil', [
            'profil_1_db' => $profil_1_db,
            'profil_2_db' => $profil_2_db,
            'riwayat_pendidikan_db' => $riwayat_pendidikan_db,
            'riwayat_pekerjaan_db' => $riwayat_pekerjaan_db,
            'riwayat_organisasi_db' => $riwayat_organisasi_db,
            'penghargaan_db' => $penghargaan_db,
        ]);
    }

    public function get_ms_db()
    {
        $media_social_db = MediaSocial::all();
        return $media_social_db;
    }

    public function kontak()
    {
        $media_social_db = MediaSocial::all();

        return Inertia::render('Kontak', [
            'media_social_db' => $media_social_db
        ]);
    }
}
