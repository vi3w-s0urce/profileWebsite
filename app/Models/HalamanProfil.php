<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use MongoDB\Laravel\Eloquent\Model as EloquentModel;

class HalamanProfil extends EloquentModel
{
    use HasFactory;

    protected $connection = 'mongodb';
    protected $collection = 'halamanProfil';
    protected $guarded = [];
}
