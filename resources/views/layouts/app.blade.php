<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'LukePOLO') }}</title>

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

    <!-- Scripts -->
    <script>
        window.Laravel = {!! json_encode([
            'env' => config('app.env'),
            'csrfToken' => csrf_token(),
            'pusherKey' => config('broadcasting.connections.pusher.key'),
            'sentryUrl' => config('services.sentryDSN')
        ]) !!};
    </script>
</head>
    <body>
        <div id="app">
            <notifications></notifications>
            <navigation></navigation>
            <div class="col-md-12 text-center mini-bar"></div>
            @yield('content')
            <footer></footer>
        </div>

        @auth
            <script>
                window.Laravel.user = {!! \Auth::user() !!}
            </script>
        @endauth

        <!-- Scripts -->
        <script src="{{ mix('js/manifest.js') }}"></script>
        <script src="{{ mix('js/vendor.js') }}"></script>
        <script src="{{ mix('js/app.js') }}"></script>
    </body>
</html>
