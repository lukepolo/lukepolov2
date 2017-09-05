<?php

namespace App\Http\Controllers\Auth;

use Socialite;
use App\Models\User;
use App\Models\UserProvider;

class OAuthController
{
    /**
     * @param $provider
     * @return mixed
     */
    public function redirect($provider)
    {
        return Socialite::driver($provider)->redirect();
    }

    /**
     * @param $provider
     */
    public function callback($provider)
    {
        $user = null;

        /** @var \Laravel\Socialite\Two\User $socialUser */
        $socialUser = Socialite::driver($provider)->user();

        $userProvider = UserProvider::withTrashed()
            ->with('user')
            ->has('user')
            ->where('provider_type', $provider)
            ->where('provider_id', $socialUser->getId())
            ->first();

        if(!empty($userProvider)) {
            $user = $userProvider->user;
        }

        if(empty($user)) {

            $userProvider = UserProvider::create([
                'provider_id'   => $socialUser->getId(),
                'provider_type' => $provider,
                'nickname'    => $socialUser->getNickName(),
                'name'        => $socialUser->getName(),
                'email'       => $socialUser->getEmail(),
                'avatar'      => $socialUser->getAvatar(),
                'meta'        => json_encode($socialUser),
            ]);

            $user = User::create([
                'name' => $userProvider->name,
                'email' => $userProvider->email,
                'user_provider_id' => $userProvider->id,
            ]);
        }

        \Auth::loginUsingId($user->id, true);

    }
}