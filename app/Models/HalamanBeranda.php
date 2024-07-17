<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use MongoDB\Laravel\Eloquent\Model as EloquentModel;

class HalamanBeranda extends EloquentModel
{
    use HasFactory;
    protected $connection = 'mongodb';
    protected $collection = 'halamanBeranda';
    protected $guarded = [];

    public function berita()
    {
        return $this->belongsTo(Berita::class);
    }
}
