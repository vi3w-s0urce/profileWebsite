<?php

namespace App\Http\Controllers;

use App\Models\Berita;
use App\Models\HalamanBeranda;
use App\Models\HalamanProfil;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\UploadedFile;
use Inertia\Inertia;
use MongoDB\BSON\ObjectId;
use Spatie\Analytics\Facades\Analytics;
use Spatie\Analytics\Period;

class AdminController extends Controller
{
    public function dashboard()
    {
        $startDate = Carbon::createFromDate(2020, 1, 1);
        $endDate = Carbon::now()->setTimezone('Asia/Jakarta');

        $analyticsData = Analytics::fetchTotalVisitorsAndPageViews(Period::create($startDate, $endDate));

        $statsWeeks = Analytics::fetchTotalVisitorsAndPageViews(Period::days(7));

        $viewsToday = Analytics::fetchTotalVisitorsAndPageViews(Period::create($endDate, $endDate));
        $viewsToday = count($viewsToday) > 0 ? $viewsToday[0]['screenPageViews'] : 0;
        $topViewsPages = Analytics::fetchMostVisitedPages(Period::create($startDate, $endDate), 5);
        $topViewsBerita = Berita::orderBy('pengunjung', 'asc')->limit(5)->get();

        $totalVisitors = $analyticsData->sum('screenPageViews');
        $uniqueVisitors = $analyticsData->sum('activeUsers');

        $monthlyVisitors = [];

        $currentYear = Carbon::now()->setTimezone('Asia/Jakarta')->year;

        for ($month = 1; $month <= Carbon::now()->month; $month++) {
            $startDate = Carbon::create($currentYear, $month, 1)->startOfMonth();
            $endDate = Carbon::create($currentYear, $month, 1)->endOfMonth();

            $analyticsData = Analytics::fetchTotalVisitorsAndPageViews(Period::create($startDate, $endDate));

            $totalVisitors = $analyticsData->sum('screenPageViews');

            $monthlyVisitors[$month] = $totalVisitors;
        }

        $topDevices = Analytics::fetchTopOperatingSystems(Period::create($startDate, $endDate), 3);

        return Inertia::render('admin/Dashboard', [
            'viewsToday' => $viewsToday,
            'uniqueVisitors' => $uniqueVisitors,
            'totalVisitors' => $totalVisitors,
            'topViewsPages' => $topViewsPages,
            'topViewsBerita' => $topViewsBerita,
            'statsWeeks' => $statsWeeks,
            'monthlyVisitors' => $monthlyVisitors,
            'topDevices' => $topDevices,
        ]);
    }

    public function halamanProfil()
    {
        $dataProfil = HalamanProfil::where('type', 'Profil')->get();
        $dataRiwayat = HalamanProfil::where('type', 'Riwayat')->get();
        $dataPenghargaan = HalamanProfil::where('type', 'Penghargaan')->first();

        return Inertia::render('admin/HalamanProfil', ['dataProfil' => $dataProfil, 'dataRiwayat' => $dataRiwayat, 'dataPenghargaan' => $dataPenghargaan]);
    }

    public function updateHalamanProfil(Request $request)
    {
        $data = $request->validate([
            'profil_1' => 'required|array',
            'profil_2' => 'required|array',
            'riwayat_pendidikan' => 'required|array',
            'riwayat_pekerjaan' => 'required|array',
            'riwayat_organisasi' => 'required|array',
            'penghargaan' => 'required|array',
        ]);

        $profil_1_db = HalamanProfil::where('type', 'Profil')->where('section', 1)->first();
        $profil_2_db = HalamanProfil::where('type', 'Profil')->where('section', 2)->first();
        $riwayat_pendidikan_db = HalamanProfil::where('type', 'Riwayat')->where('section', 'pendidikan')->first();
        $riwayat_pekerjaan_db = HalamanProfil::where('type', 'Riwayat')->where('section', 'pekerjaan')->first();
        $riwayat_organisasi_db = HalamanProfil::where('type', 'Riwayat')->where('section', 'organisasi')->first();
        $penghargaan_db = HalamanProfil::where('type', 'Penghargaan')->first();

        // PROFIL_1
        if ($data['profil_1']['gambar']) {
            if (!$profil_1_db->gambar) {
                $imageName = 'profil_1' . '.' . $data['profil_1']['gambar']->extension();
                $moveFile = $data['profil_1']['gambar']->storeAs('public/profilImages', $imageName);
                if ($moveFile) {
                    $profil_1_db->update(['gambar' => $imageName]);
                }
            } else if ($profil_1_db->gambar != $data['profil_1']['gambar']) {
                $gambarPath = 'public/profilImages/' . $profil_1_db->gambar;

                if (Storage::exists($gambarPath)) {
                    Storage::delete($gambarPath);
                }

                $imageName = 'profil_1' . '.' . $data['profil_1']['gambar']->extension();
                $moveFile = $data['profil_1']['gambar']->storeAs('public/profilImages', $imageName);
                if ($moveFile) {
                    $profil_1_db->update(['gambar' => $imageName]);
                }
            }
        };

        $profil_1_db->update(['deskripsi' => $data['profil_1']['deskripsi']]);

        // PROFIL_2
        if ($data['profil_2']['gambar']) {
            if (!$profil_2_db->gambar) {
                $imageName = 'profil_2' . '.' . $data['profil_2']['gambar']->extension();
                $moveFile = $data['profil_2']['gambar']->storeAs('public/profilImages', $imageName);
                if ($moveFile) {
                    $profil_2_db->update(['gambar' => $imageName]);
                }
            } else if ($profil_2_db->gambar != $data['profil_2']['gambar']) {
                $gambarPath = 'public/profilImages/' . $profil_2_db->gambar;

                if (Storage::exists($gambarPath)) {
                    Storage::delete($gambarPath);
                }

                $imageName = 'profil_2' . '.' . $data['profil_2']['gambar']->extension();
                $moveFile = $data['profil_2']['gambar']->storeAs('public/profilImages', $imageName);
                if ($moveFile) {
                    $profil_2_db->update(['gambar' => $imageName]);
                }
            }
        };

        $profil_2_db->update(['deskripsi' => $data['profil_2']['deskripsi']]);

        // RIWAYAT
        $riwayat_pendidikan_db->update(['list' => $data['riwayat_pendidikan']]);
        $riwayat_pekerjaan_db->update(['list' => $data['riwayat_pekerjaan']]);
        $riwayat_organisasi_db->update(['list' => $data['riwayat_organisasi']]);

        // PENGHARGAAN
        $dataPenghargaan = $data['penghargaan'];
        $penghargaanList = $penghargaan_db->list ?? [];

        $newPenghargaanList = [];

        foreach ($dataPenghargaan as $index => $item) {
            $newItem = [
                'judul' => $item['judul'],
                'deskripsi' => $item['deskripsi'],
            ];

            if ($item['gambar'] instanceof UploadedFile) {
                $imageName = 'penghargaan-' . ($index + 1) . '.' . $item['gambar']->extension();
                $moveFile = $item['gambar']->storeAs('public/penghargaanImages', $imageName);
                if ($moveFile) {
                    $newItem['gambar'] = $imageName;
                }
            } else {
                $newItem['gambar'] = $item['gambar'];
            }

            $newPenghargaanList[] = $newItem;
        }

        $penghargaan_db->update(['list' => $newPenghargaanList]);

        return redirect()->back()->with('success', 'Berhasil menyimpan pembaharauan');
    }

    public function halamanBeranda()
    {
        $dataHerosection = HalamanBeranda::where('type', 'HeroSection')->first();
        $dataYoutube = HalamanBeranda::where('type', 'Youtube')->first();
        $dataMediaSocial = HalamanBeranda::where('type', 'MediaSocial')->get();
        $dataBerita = Berita::all();
        $dataCarouselBerita = HalamanBeranda::where('type', 'CarouselBerita')->pluck('berita_id');
        $dataCarouselBerita = $dataCarouselBerita->map(function ($beritaId) {
            if ($beritaId instanceof ObjectId) {
                return (string) $beritaId;
            } elseif (is_array($beritaId) && isset($beritaId['$oid'])) {
                return $beritaId['$oid'];
            } else {
                return null;
            }
        });

        return Inertia::render('admin/HalamanBeranda', [
            'dataHerosection' => $dataHerosection,
            'dataCarouselBerita' => $dataCarouselBerita,
            'dataYoutube' => $dataYoutube,
            'dataMediaSocial' => $dataMediaSocial,
            'dataBerita' => $dataBerita
        ]);
    }

    public function updateHalamanBeranda(Request $request)
    {
        $data = $request->validate([
            'hero_section' => 'required|array',
            'youtube' => 'required|array',
            'media_social' => 'required|array',
        ]);

        $hero_section_db = HalamanBeranda::where('type', 'HeroSection')->first();
        $youtube_db = HalamanBeranda::where('type', 'Youtube')->first();
        $ms_facebook_db = HalamanBeranda::where('type', 'MediaSocial')->where('media', 'facebook')->first();
        $ms_instagram_db = HalamanBeranda::where('type', 'MediaSocial')->where('media', 'instagram')->first();
        $ms_twitter_db = HalamanBeranda::where('type', 'MediaSocial')->where('media', 'twitter')->first();
        $ms_email_db = HalamanBeranda::where('type', 'MediaSocial')->where('media', 'email')->first();
        $ms_youtube_db = HalamanBeranda::where('type', 'MediaSocial')->where('media', 'youtube')->first();

        // Hero Section
        $hero_section_db->update([
            'judul' => $data['hero_section']['judul'],
            'subJudul' => $data['hero_section']['subJudul']
        ]);

        // Carousel Berita
        HalamanBeranda::where('type', 'CarouselBerita')->delete();
        foreach ($data['hero_section']['carouselBerita'] as $item) {
            HalamanBeranda::create([
                'type' => 'CarouselBerita',
                'berita_id' => new ObjectId($item),
            ]);
        }

        // Youtube
        $youtube_db->update([
            'videoUtama' => $data['youtube']['videoUtama'],
            'videoLainnya' => $data['youtube']['videoLainnya']
        ]);

        // Media Social
        $ms_facebook_db->update([
            'nama' => $data['media_social'][0]['nama'],
            'link' => $data['media_social'][0]['link'],
            'isVisible' => $data['media_social'][0]['isVisible']
        ]);

        $ms_instagram_db->update([
            'nama' => $data['media_social'][1]['nama'],
            'link' => $data['media_social'][1]['link'],
            'isVisible' => $data['media_social'][1]['isVisible']
        ]);

        $ms_twitter_db->update([
            'nama' => $data['media_social'][2]['nama'],
            'link' => $data['media_social'][2]['link'],
            'isVisible' => $data['media_social'][2]['isVisible']
        ]);

        $ms_email_db->update([
            'email' => $data['media_social'][3]['email'],
            'isVisible' => $data['media_social'][3]['isVisible']
        ]);

        $ms_youtube_db->update([
            'nama' => $data['media_social'][4]['nama'],
            'link' => $data['media_social'][4]['link'],
            'isVisible' => $data['media_social'][4]['isVisible']
        ]);

        return redirect()->back()->with('success', 'Berhasil menyimpan pembaharauan');
    }
};
