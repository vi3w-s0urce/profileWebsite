<?php

namespace App\Http\Controllers;

use App\Models\Berita;
use App\Models\HalamanBeranda;
use App\Models\HalamanProfil;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LandingPageController extends Controller
{
    public function beranda()
    {
        $hero_section_db = HalamanBeranda::where('type', 'HeroSection')->first();
        $carousel_berita_db = HalamanBeranda::where('type', 'CarouselBerita')->with('berita')->get();
        $profil_1_db = HalamanProfil::where('type', 'Profil')->where('section', 1)->first();
        $berita_db = Berita::limit(4)->get();
        $youtube_db = HalamanBeranda::where('type', 'Youtube')->first();
        $media_social_db = HalamanBeranda::where('type', 'MediaSocial')->get();

        return Inertia::render('Beranda', [
            'hero_section_db' => $hero_section_db,
            'carousel_berita_db' => $carousel_berita_db,
            'profil_1_db' => $profil_1_db,
            'berita_db' => $berita_db,
            'youtube_db' => $youtube_db,
            'media_social_db' => $media_social_db,
        ]);
    }

    public function profil()
    {
        $profil_1_db = HalamanProfil::where('type', 'Profil')->where('section', 1)->first();
        $profil_2_db = HalamanProfil::where('type', 'Profil')->where('section', 2)->first();
        $riwayat_pendidikan_db = HalamanProfil::where('type', 'Riwayat')->where('section', 'pendidikan')->first();
        $riwayat_pekerjaan_db = HalamanProfil::where('type', 'Riwayat')->where('section', 'pekerjaan')->first();
        $riwayat_organisasi_db = HalamanProfil::where('type', 'Riwayat')->where('section', 'organisasi')->first();
        $penghargaan_db = HalamanProfil::where('type', 'Penghargaan')->first();

        return Inertia::render('Profil', [
            'profil_1_db' => $profil_1_db,
            'profil_2_db' => $profil_2_db,
            'riwayat_pendidikan_db' => $riwayat_pendidikan_db,
            'riwayat_pekerjaan_db' => $riwayat_pekerjaan_db,
            'riwayat_organisasi_db' => $riwayat_organisasi_db,
            'penghargaan_db' => $penghargaan_db,
        ]);
    }

    public function get_ms_db() {
        $media_social_db = HalamanBeranda::where('type', 'MediaSocial')->get();
        return $media_social_db;
    }
}
