<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CarouselBerita extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function Berita()
    {
        return $this->belongsTo(Berita::class);
    }
}
