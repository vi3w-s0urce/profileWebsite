<?php

namespace Database\Seeders;

use App\Models\HalamanBeranda;
use App\Models\HalamanProfil;
use App\Models\User;
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
        User::where([])->delete();

        User::create([
            'name' => 'Admin',
            'username' => 'admin',
            'email' => 'admin@admin.com',
            'password' => Hash::make('admin123'),
            'defaultPassword' => true,
        ]);

        HalamanProfil::where([])->delete();

        HalamanProfil::insert([
            // PROFIL
            [
                'type' => 'Profil',
                'section' => 1,
                'gambar' => null,
                'deskripsi' => 'Prof. Drs. H. Ganefri, M.Pd., Ph.D. gelar Datuak Djunjungan Nan Bagadiang (lahir 17 Desember 1963) adalah seorang dosen, pengajar, dan akademisi teknik Indonesia. Ia merupakan Rektor Universitas Negeri Padang (UNP) dua periode sejak 2016 hingga 2024 dan menjabat Ketua Majelis Rektor Perguruan Tinggi Negeri Indonesia periode 2022–2024. Ia tercatat sebagai Ketua Badan Pembina Universitas Bung Hatta.',
            ],
            [
                'type' => 'Profil',
                'section' => 2,
                'gambar' => null,
                'deskripsi' => 'Ganefri terlahir sebagai anak ketiga dari empat bersaudara. Saat berusia 5 tahun, ia telah menjadi yatim. Beruntung saat itu, pepatah Minangkabau, "anak dipangku kamanakan dibimbiang" masih kental dijalankan di kampung halamannya, Payakumbuh.
Saat kelas IV SD, ia meninggalkan Payakumbuh dan pergi merantau ke Tanjung Pinang, Kepulauan Riau untuk melanjutkan sekolah bersama etek-nya. Sedari dulu, orang tua di kampungnya telah menanamkan budaya pendidikan adalah hal utama bagi anak, “Biarlah kurang makan asal anak sekolah”.
Ganefri menyelesaikan pendidikan SD (1976) dan SMP Belakang Padang (1980) di Batam. Ia lalu menyelesaikan pendidikan SLTA di Tanjung Pinang (1983). Ia menyelesaikan studi S1 Pendidikan Elektro dari IKIP Padang (1988) dan S2 Pendidikan Teknik dan Kejuruan dari IKIP Yogyakarta (1996). Ia berhasil menamatkan studi S3 Pendidikan Teknikal Vokational dari UKM Malaysia (2011).',
            ],

            // RIWAYAT
            [
                'type' => 'Riwayat',
                'section' => 'pendidikan',
                'list' => ['SD Belakang Padang (1976)', 'SMP Belakang Padang  (1980)', 'SLTA Tanjung Pinang (1983)', 'S1 Pendidikan Elektro dari IKIP Padang (1988)', 'S2 Pendidikan Teknik dan Kejuruan dari IKIP Yogyakarta (1996)', 'S3 Pendidikan Teknikal Vokational dari UKM Malaysia (2011)']
            ],
            [
                'type' => 'Riwayat',
                'section' => 'pekerjaan',
                'list' => ['Dosen Pembimbing di IKIP Padang(kini Universitas Negeri Padang) sejak 1989', 'Kepala Laboratorium Komputer Fakultas Teknik (FT) IKIP Padang (1992 – 1997)', 'Sekretaris Jurusan Teknik Elektro FT UNP (1999 – 2004)', 'Pembantu Dekan II FT UNP (2004 - 2007)', 'Dekan FT UNP (2007 - 2014)', 'Rektor Universitas Negeri Padang (2012 - 2024)']
            ],
            [
                'type' => 'Riwayat',
                'section' => 'organisasi',
                'list' => ['Ketua III Lembaga Karate-Do Indonesia (LEMKARI) Sumatera Barat pada 2006–2010', 'Sekretaris Jenderal Ikatan Alumni FT UNP pada 2004–2009', 'Sekjen Ikatan Alumni UNP selama dua periode, 2009–2014 dan 2014–2018', 'Ketua Umum Asosiasi Pendidikan Teknologi Kejuruan Indonesia (APTEKINDO) pada 2008 sampai sekarang', 'Ketua Umum Pengprov Keluarga Olahraga Tarung Drajat (Kodrat) Sumatera Barat 2013–2017 dan 2017–2021', 'Koordinator Bidang Usaha Dewan Pimpinan Pusat (DPP) Ikatan Sarjana Pendidikan Indonesia (ISPI) masa bakti 2014–2019', 'Ketua Tanfidziyah Pengurus Wilayah Nahdlatul Ulama (PWNU) Sumatera Barat masa khidmat 2019–2024', 'Pembina Ikatan Ahli Informatika Indonesia DPW Sumatera Barat periode 2019–2022']
            ],

            // PENGHARGAAN
            [
                'type' => 'Penghargaan',
                'list' => [],
            ],
        ]);

        HalamanBeranda::where([])->delete();

        HalamanBeranda::insert([
            // Hero Section
            [
                'type' => 'HeroSection',
                'judul' => 'Prof. Drs. H. Ganefri, M.Pd., Ph.D',
                'subJudul' => 'Selamat datang di website resmi',
            ],
            // // CarouselBerita
            // [
            //     'type' => 'CarouselBerita',
            //     'judul' => 'Prof. Drs. H. Ganefri, M.Pd., Ph.D',
            //     'subJudul' => 'Selamat datang di website resmi',
            // ],
            [
                'type' => 'Youtube',
                'videoUtama' => '',
                'videoLainnya' => [],
            ],
            [
                'type' => 'MediaSocial',
                'media' => 'facebook',
                'nama' => 'Ganefri Facebook',
                'link' => 'https://facebook.com/',
                'isVisible' => true,
            ],
            [
                'type' => 'MediaSocial',
                'media' => 'instagram',
                'nama' => '@ganefri_instagram',
                'link' => 'https://instagram.com/',
                'isVisible' => false,
            ],
            [
                'type' => 'MediaSocial',
                'media' => 'twitter',
                'nama' => '@ganefri_twitter',
                'link' => 'https://twitter.com/',
                'isVisible' => true,
            ],
            [
                'type' => 'MediaSocial',
                'media' => 'email',
                'email' => 'ganefri@gmail.com',
                'isVisible' => false,
            ],
            [
                'type' => 'MediaSocial',
                'media' => 'youtube',
                'nama' => 'Ganefri Youtube',
                'link' => 'https://youtube.com/',
                'isVisible' => true,
            ],
        ]);
    }
}
