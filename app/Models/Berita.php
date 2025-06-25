<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Berita extends Model
{
    use HasFactory;
    protected $fillable = [
        'judul',
        'kategori',
        'gambar',
        'tanggal',
        'content',
        'pengunjung',
        'slug'
    ];

    protected $casts = [
        'content' => 'json'
    ];

    public function carouselBerita()
    {
        return $this->hasOne(CarouselBerita::class);
    }

}
