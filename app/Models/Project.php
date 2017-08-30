<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $guarded = ['id'];

    protected $with = [
        'timeline',
        'technologies'
    ];

    /*
    |--------------------------------------------------------------------------
    | Relations
    |--------------------------------------------------------------------------
    |
    */

    public function timeline()
    {
        return $this->belongsTo(Timeline::class);
    }

    public function technologies()
    {
        return $this->belongsToMany(Technology::class);
    }
}
