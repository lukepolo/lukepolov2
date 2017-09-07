<?php

namespace App\Http\Controllers\Auth;

use Socialite;
use App\Models\User;
use App\Models\UserProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Session;

class OAuthController extends Controller
{
    /**
     * @param Request $request
     * @param $provider
     * @return mixed
     */
    public function redirect(Request $request, $provider)
    {
        Session::put('url.intended', $request->headers->get('referer'));

        return Socialite::driver($provider)->redirect();
    }

    /**
     * @param $provider
     * @return \Illuminate\Http\RedirectResponse
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

        return redirect()->intended('/');
    }

    /**
     * Log the user out of the application.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function logout(Request $request)
    {
        Auth::guard()->logout();

        $request->session()->invalidate();

        return redirect('/');
    }

}