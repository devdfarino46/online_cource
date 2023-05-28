const gulp = require('gulp');
const pug = require('gulp-pug');
const bs = require('browser-sync');

module.exports =  function html() {
    return gulp.src(["src/*.pug"])
        .pipe(pug())
        .pipe(gulp.dest("dist/"))
        .pipe(bs.stream());
}