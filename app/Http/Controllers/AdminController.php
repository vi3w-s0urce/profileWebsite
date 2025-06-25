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
        // dd($statsWeeks);

        $viewsToday = Analytics::fetchTotalVisitorsAndPageViews(Period::create($endDate, $endDate));
        $viewsToday = count($viewsToday) > 0 ? $viewsToday[0]['screenPageViews'] : 0;
        $topViewsPages = Analytics::fetchMostVisitedPages(Period::create($startDate, $endDate), 5);
        $topViewsBerita = Berita::orderBy('pengunjung', 'desc')->limit(5)->get();

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
        $dataProfil = SectionContent::whereIn('type', ['profil_1', 'profil_2'])->get();
        $dataRiwayat = Riwayat::all();
        $dataPenghargaan = Penghargaan::all();

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

        $profil_1_db = SectionContent::where('type', 'profil_1')->first();
        $profil_2_db = SectionContent::where('type', 'profil_2')->first();

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

        $profil_1_db->update(['content' => $data['profil_1']['content']]);

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

        $profil_2_db->update(['content' => $data['profil_2']['content']]);

        // RIWAYAT
        Riwayat::truncate();
        foreach ($data['riwayat_pendidikan'] as $key => $value) {
            Riwayat::create([
                'type' => 'pendidikan',
                'list' => $value,
            ]);
        }
        foreach ($data['riwayat_pekerjaan'] as $key => $value) {
            Riwayat::create([
                'type' => 'pekerjaan',
                'list' => $value,
            ]);
        }
        foreach ($data['riwayat_organisasi'] as $key => $value) {
            Riwayat::create([
                'type' => 'organisasi',
                'list' => $value,
            ]);
        }

        // PENGHARGAAN
        $dataPenghargaan = $data['penghargaan'];
        $newIds = collect($dataPenghargaan)->pluck('id')->filter()->all();
        Penghargaan::whereNotIn('id', $newIds)->delete();

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

            if (isset($item['id'])) {
                Penghargaan::where('id', $item['id'])->update($newItem);
            } else {
                Penghargaan::create($newItem);
            }
        }

        return redirect()->back()->with('success', 'Berhasil menyimpan pembaharauan');
    }

    public function halamanBeranda()
    {
        $dataHerosection = SectionContent::whereIn('type', ['judulBeranda', 'subJudulBeranda'])->get();
        $dataYoutube = Youtube::all();
        $dataMediaSocial = MediaSocial::all();
        $dataBerita = Berita::orderBy('created_at', 'desc')->get();
        $dataCarouselBerita = CarouselBerita::with('Berita')->get();

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

        // Hero Section
        $subJudul = $data['hero_section']['subJudul'];
        $judul = $data['hero_section']['judul'];
        $db_subJudul = SectionContent::where('type', 'subJudulBeranda')->first();
        $db_judul = SectionContent::where('type', 'judulBeranda')->first();

        $db_subJudul->update(['content' => $subJudul]);
        $db_judul->update(['content' => $judul]);

        // Carousel Berita
        $carouselBerita = $data['hero_section']['carouselBerita'];

        CarouselBerita::truncate();
        foreach ($carouselBerita as $key => $value) {
            CarouselBerita::create([
                'berita_id' => $value
            ]);
        }

        // Youtube
        $videoUtama = $data['youtube']['videoUtama'];
        $videoLainnya = $data['youtube']['videoLainnya'];
        
        Youtube::truncate();
        Youtube::create([
            'type' => 'utama',
            'nama' => 'Video Utama',
            'link' => $videoUtama
        ]);
        foreach ($videoLainnya as $key => $value) {
            Youtube::create([
                'type' => 'lainnya',
                'nama' => $value['nama'],
                'link' => $value['link']
            ]);
        }

        // Media Social
        $ms_facebook_db = MediaSocial::where('media', 'facebook')->first();
        $ms_instagram_db = MediaSocial::where('media', 'instagram')->first();
        $ms_twitter_db = MediaSocial::where('media', 'twitter')->first();
        $ms_email_db = MediaSocial::where('media', 'email')->first();
        $ms_youtube_db = MediaSocial::where('media', 'youtube')->first();
        
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
            'link' => $data['media_social'][3]['link'],
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
