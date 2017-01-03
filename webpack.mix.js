let mix = require('laravel-mix').mix;

/*
 |---------------------------------------------------------------------------
 | Mix Asset Management
 |---------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.setPublicPath(__dirname + '/dist');

mix.js('src/ui-kit.js', '/')
    .sass('src/scss/ui-kit.scss', '/');
