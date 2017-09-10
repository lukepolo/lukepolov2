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
        'select2',
        'chart.js',
        'raven-js',
        'nprogress',
        'tinycolor2',
        'vue-color',
        'pusher-js',
        'vue-router',
        'snapsvg-cjs',
        'laravel-echo',
        'froala-editor',
        'vue2-dropzone',
        'bootstrap-sass',
        'moment-timezone',
        'vue-froala-wysiwyg',
        'vue-flatpickr-component',
    ])
    .autoload({
        vue : 'Vue',
        lodash : '_',
        select2 : 'select2',
        'chart.js' : 'Chart',
        'pusher-js' : 'Pusher',
        'snapsvg-cjs' : 'snap',
        'tinycolor2' : 'tinycolor',
        jquery: ['$', 'jQuery'],
    })
    .sourceMaps()
    .version()
mix.browserSync({
    open: 'external',
    host : 'lukepolo.dev',
    proxy : 'lukepolo.dev'
})
