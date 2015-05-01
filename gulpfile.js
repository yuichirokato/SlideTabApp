var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var coffee = require('gulp-coffee');

var paths = {
    sass: ['./www/**/*.scss'],
    coffee: ['./www/**/*.coffee']
};

gulp.task('default', ['sass']);

gulp.task('sass', function (done) {
    gulp.src('./scss/ionic.app.scss')
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(gulp.dest('./www/css/'))
        .pipe(minifyCss({
            keepSpecialComments: 0
        }))
        .pipe(rename({extname: '.min.css'}))
        .pipe(gulp.dest('./www/css/'))
        .on('end', done);
});

gulp.task('coffee', function (done) {
    gulp.src(paths.coffee)
        .pipe(coffee({bare: true})
            .on('error', gutil.log.bind(gutil, 'Coffee Error')))
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./www/js'))
        .on('end', done)
});

gulp.task('watch', function () {
    gulp.watch(paths.sass, ['sass']);
    gulp.watch(paths.coffee, ['coffee'])
});

gulp.task('install', ['git-check'], function () {
    return bower.commands.install()
        .on('log', function (data) {
            gutil.log('bower', gutil.colors.cyan(data.id), data.message);
        });
});

gulp.task('git-check', function (done) {
    if (!sh.which('git')) {
        console.log(
            '  ' + gutil.colors.red('Git is not installed.'),
            '\n  Git, the version control system, is required to download Ionic.',
            '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
            '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
        );
        process.exit(1);
    }
    done();
});

gulp.task('ionic-plugin-install', function () {
    var plugins = require('./package.json').cordovaPlugins;
    for (var i = 0; i < plugins.length; i++) {
        var plugin = plugins[i];
        sh.exec('ionic plugin add ' + plugin, {async: false}, function (code, output) {
            console.log(output);
        });
    }
});
