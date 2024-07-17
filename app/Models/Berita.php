<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use MongoDB\Laravel\Eloquent\Model as EloquentModel;

class Berita extends EloquentModel
{
    use HasFactory;

    protected $connection = 'mongodb';
    protected $collection = 'berita';

    protected $fillable = [
        'judul', 'kategori', 'path_gambar', 'tanggal', 'content', 'pengunjung', 'slug'
    ];

    protected $casts = [
        'content' => 'json'
    ];

    public function halamanberanda()
    {
        return $this->hasOne(HalamanBeranda::class);
    }
}
