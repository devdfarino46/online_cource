const gulp = require('gulp');
const fontfacegen = require('gulp-fontfacegen');

module.exports = function css_fonts_gen() {
    return gulp.src("src/assets/fonts/**/*.+(eot|ttf|otf|otc|ttc|woff|woff2|svg)")
        .pipe(gulp.dest("dist/fonts"))
        .pipe(fontfacegen({
            filepath: "./dist/fonts/",
            filename: "fonts.css"
        }))
}