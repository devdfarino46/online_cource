const gulp = require('gulp');

module.exports = function watching() {
    gulp.watch("src/**/*.pug", exports.html);
    gulp.watch("src/scss/**/*.scss", exports.css);
    gulp.watch("src/js/**/*.js", exports.js);
}