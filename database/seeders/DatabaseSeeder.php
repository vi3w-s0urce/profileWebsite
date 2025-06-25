<?php

namespace Database\Seeders;

use App\Models\Berita;
use App\Models\HalamanBeranda;
use App\Models\HalamanProfil;
use App\Models\MediaSocial;
use App\Models\Riwayat;
use App\Models\SectionContent;
use App\Models\User;
use App\Models\Youtube;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Berita::where([])->delete();
        User::where([])->delete();

        User::create([
            'name' => 'Admin',
            'username' => 'admin',
            'email' => 'admin@admin.com',
            'password' => Hash::make('admin.g4n3fr1@123'),
            'isMainAccount' => true,
            'defaultPassword' => true,
        ]);

        SectionContent::create([
            'type' => 'judulBeranda',
            'content' => 'Prof. Drs. H. Ganefri, M.Pd., Ph.D',
        ]);

        SectionContent::create([
            'type' => 'subJudulBeranda',
            'content' => 'Selamat datang di website resmi',
        ]);

        SectionContent::create([
            'type' => 'profil_1',
            'content' => 'Prof. Drs. H. Ganefri, M.Pd., Ph.D. gelar Datuak Djunjungan Nan Bagadiang (lahir 17 Desember 1963) adalah seorang dosen, pengajar, dan akademisi teknik Indonesia. Ia merupakan Rektor Universitas Negeri Padang (UNP) dua periode sejak 2016 hingga 2024 dan menjabat Ketua Majelis Rektor Perguruan Tinggi Negeri Indonesia periode 2022–2024. Ia tercatat sebagai Ketua Badan Pembina Universitas Bung Hatta.',
        ]);

        SectionContent::create([
            'type' => 'profil_2',
            'content' => 'Prof. Drs. H. Ganefri, M.Pd., Ph.D. gelar Datuak Djunjungan Nan Bagadiang (lahir 17 Desember 1963) adalah seorang dosen, pengajar, dan akademisi teknik Indonesia. Ia merupakan Rektor Universitas Negeri Padang (UNP) dua periode sejak 2016 hingga 2024 dan menjabat Ketua Majelis Rektor Perguruan Tinggi Negeri Indonesia periode 2022–2024. Ia tercatat sebagai Ketua Badan Pembina Universitas Bung Hatta.',
        ]);

        for ($i = 0; $i < 3; $i++) {
            Riwayat::create([
                'type' => 'pendidikan',
                'list' => 'pendidikan ' . $i,
            ]);
        }

        for ($i = 0; $i < 3; $i++) {
            Riwayat::create([
                'type' => 'pekerjaan',
                'list' => 'pekerjaan ' . $i,
            ]);
        }

        for ($i = 0; $i < 3; $i++) {
            Riwayat::create([
                'type' => 'organisasi',
                'list' => 'organisasi ' . $i,
            ]);
        }

        MediaSocial::create([
            "media" => "facebook",
            "nama" => "Ganefri Facebook",
            "link" => "https://facebook.com/",
            "isVisible" => true
        ]);

        MediaSocial::create([
            "media" => "instagram",
            "nama" => "@ganefri_instagram",
            "link" => "https://instagram.com/",
            "isVisible" => true
        ]);

        MediaSocial::create([
            "media" => "twitter",
            "nama" => "@ganefri_twitter",
            "link" => "https://twitter.com/",
            "isVisible" => true
        ]);
        
        MediaSocial::create([
            "media" => "email",
            "nama" => "Email",
            "link" => "ganefri@gmail.com",
            "isVisible" => true
        ]);

        MediaSocial::create([
            "media" => "youtube",
            "nama" => "Ganefri Youtube",
            "link" => "https://youtube.com/",
            "isVisible" => true
        ]);

        Youtube::create([
            "type" => "utama",
            "nama" => "Video Utama",
            "link" => "https://youtu.be/HkmLjbUN_Cs?si=1Eow4xNnNQ4GtwyF",
        ]);

        Youtube::create([
            "type" => "lainnya",
            "nama" => "Video 1",
            "link" => "https://youtu.be/HkmLjbUN_Cs?si=1Eow4xNnNQ4GtwyF",
        ]);

        Youtube::create([
            "type" => "lainnya",
            "nama" => "Video 2",
            "link" => "https://youtu.be/HkmLjbUN_Cs?si=1Eow4xNnNQ4GtwyF",
        ]);

        Youtube::create([
            "type" => "lainnya",
            "nama" => "Video 3",
            "link" => "https://youtu.be/HkmLjbUN_Cs?si=1Eow4xNnNQ4GtwyF",
        ]);
    }
}
