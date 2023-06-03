const gulp = require('gulp');
const pug = require('gulp-pug');

module.exports =  function html() {
    return gulp.src(["src/*.pug"])
        .pipe(pug())
        .pipe(gulp.dest("dist/"));
}