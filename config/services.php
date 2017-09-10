<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Stripe, Mailgun, SparkPost and others. This file provides a sane
    | default location for this type of information, allowing packages
    | to have a conventional place to find your various credentials.
    |
    */

    'mailgun' => [
        'domain' => env('MAILGUN_DOMAIN'),
        'secret' => env('MAILGUN_SECRET'),
    ],

    'github' => [
        'client_id' => env('GITHUB_CLIENT'),
        'client_secret' => env('GITHUB_SECRET'),
        'redirect' => env('APP_URL').'/oauth/callback/github'
    ],

    'twitter' => [
        'client_id' => env('TWITTER_CLIENT'),
        'client_secret' => env('TWITTER_SECRET'),
        'redirect' => env('APP_URL').'/oauth/callback/twitter'
    ],

    'sentry' => env('SENTRY_JS_DSN')


];
