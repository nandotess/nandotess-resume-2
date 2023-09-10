'use strict';

const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const config = require('config-yml');
const path = require('path');
const sass = require('gulp-sass')(require('node-sass'));

const $ = gulpLoadPlugins({
    pattern: ['gulp-*', 'cli-*', 'webpack-*']
});

// Help
const _default = function(done) {
    console.log('');
    console.log($.cliColor.blackBright('# Development tasks'));
    console.log('gulp ' + $.cliColor.green('init') + '                       ' + $.cliColor.blackBright('# Shortcode for `gulp watch`'));
    console.log('gulp ' + $.cliColor.green('watch') + '                      ' + $.cliColor.blackBright('# Watch for changes on files to recompile them'));
    console.log('gulp ' + $.cliColor.green('build') + '                      ' + $.cliColor.blackBright('# Build JavaScript and Sass files'));
    console.log('');
    console.log($.cliColor.blackBright('# Triggered by `gulp watch` and `gulp build`:'));
    console.log('gulp ' + $.cliColor.green('sass') + '                       ' + $.cliColor.blackBright('# Combine/compile and compress Sass files'));
    console.log('gulp ' + $.cliColor.green('js') + '                         ' + $.cliColor.blackBright('# Combine and compress JavaScript files'));
    console.log('');

    done();
};

gulp.task('default', _default);

// Shortcode for gulp watch
gulp.task('init', function() {
    gulp.start('watch');
});

// Combine/compile and compress Sass files
const _sass = function() {
    return gulp.src(config.paths.src_sass)
        .pipe($.sourcemaps.init())
        .pipe(
            sass({
                includePaths: config.paths.npm_sass,
                outputStyle: 'compact'
            })
            .on('error', sass.logError))
        .pipe($.autoprefixer())
        .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest(config.paths.dist_css))
        .pipe($.size());
};

gulp.task('sass', _sass);

// Combine and compress JavaScript files
const _js = function() {
    return gulp.src(config.paths.src_js)
        .pipe($.webpackStream({
            devtool: 'source-map',
            mode: 'production',
            output: {
                path: path.join(__dirname, config.paths.dist_js.folder),
                filename: config.paths.dist_js.file
            },
            module: {
                rules: [{
                    test: /\.(js|jsx)$/,
                    exclude: /(node_modules)/,
                    loader: 'babel-loader'
                }]
            }
        }))
        .pipe(gulp.dest(config.paths.dist_js.folder))
        .pipe($.size());
};

gulp.task('js', _js);

// Build JavaScript and Sass files
const _build = gulp.series(_sass, _js, function(done) {
    done();
});

gulp.task('build', _build);

// Watch for changes on files to recompile them
const _watch = gulp.series(_sass, _js, function(done) {
    gulp.watch(config.helpers.all_sass, _sass);
    gulp.watch(config.helpers.all_js, _js);

    done();
});

gulp.task('watch', _watch);

// Shortcode for gulp watch
const _init = gulp.series(_watch, function(done) {
    done();
});

gulp.task('init', _init);
