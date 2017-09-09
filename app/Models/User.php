<?php

namespace App\Models;

use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable, HasApiTokens;

    const ADMIN_ROLE = 'admin';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'user_provider_id',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    protected $with = [
        'userProvider'
    ];

    /*
    |--------------------------------------------------------------------------
    | Relations
    |--------------------------------------------------------------------------
    */

    public function userProvider()
    {
        return $this->belongsTo(UserProvider::class);
    }

    public function comments()
    {
        return $this->hasMany(BlogComment::class);
    }

    /*
    |--------------------------------------------------------------------------
    | Helpers
    |--------------------------------------------------------------------------
    */

    public function isAdmin()
    {
        return $this->role ===  self::ADMIN_ROLE;
    }

    /**
     * Since we did not setup cascade deletes in mysql we have to do it manually
     *
     * @return bool|null
     */
    public function delete()
    {
        $this->comments()->delete();
        $this->userProvider()->delete();

        return parent::delete();
    }
}
