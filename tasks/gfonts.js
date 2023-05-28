const gulp = require('gulp');
const googleFonts = require('gulp-google-webfonts');

module.exports = function gfonts() {
    return gulp.src("src/assets/fonts/gfonts.list")
        .pipe(googleFonts({
            cssFilename: "fonts.css",
            fontDisplayType: "swap"
        }))
        .pipe(gulp.dest("dist/google/fonts"));
}