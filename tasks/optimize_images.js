const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');

module.exports = function optimize_images() {
    return gulp.src("src/assets/img/**/*.+(png|jpg|jpeg|gif|svg|ico)")
        .pipe(imagemin([
            imagemin.mozjpeg({
                quality: 70,
                progressive: true
            }),
            imagemin.optipng({
                optimizationLevel: 5
            }),
            imagemin.svgo()
        ], {
            verbose: true
        }))
        .pipe(gulp.src("src/assets/img/**/*.+(png|jpg|jpeg)")
            .pipe(webp()))
        .pipe(gulp.dest("dist/img/"));
}