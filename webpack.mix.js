const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
    .sass('resources/assets/sass/app.scss', 'public/css')
    .extract([
        'vue',
        'vuex',
        'axios',
        'lodash',
        'jquery',
        'chartjs',
        'select2',
        'nprogress',
        'tinycolor',
        'vue-router',
        'snapsvg-cjs',
        'bootstrap-sass',
        'moment-timezone',
    ])
    .autoload({
        vue : 'Vue',
        lodash : '_',
        select2 : 'select2',
        chartjs : 'chartjs',
        'pusher-js' : 'Pusher',
        'snapsvg-cjs' : 'snap',
        tinycolor : 'tinycolor',
        jquery: ['$', 'jQuery'],
    })
mix.browserSync({
    open: 'external',
    host : 'lukepolo.dev',
    proxy : 'lukepolo.dev'
})
