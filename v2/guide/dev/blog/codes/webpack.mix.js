let mix = require('laravel-mix');

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

mix.setPublicPath('assets');
mix.setResourceRoot('/assets/plus-blog');
mix.sourceMaps(! mix.inProduction());

// More documents see: https://laravel.com/docs/master/mix
mix.js('resources/assets/main.js', 'assets/app.js');
