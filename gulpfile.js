const gulp = require('gulp');
const requireDir = require('require-dir');
const tasks = requireDir('./tasks');
const bs = require('browser-sync').create();

exports.css = tasks.css;
exports.html = tasks.html;
exports.js = tasks.js;
exports.bs_html = tasks.bs_html;
exports.watching = tasks.watching;
exports.optimize_images = tasks.optimize_images;
exports.image_resize = tasks.image_resize;
exports.css_fonts_gen = tasks.css_fonts_gen;
exports.gfonts = tasks.gfonts;

exports.live_reload = function live_reload() {
    bs.init({
        server: {
            baseDir: "dist/",
        },
        // notify: false,
        // online: true,
        // tunnel: true,
        open: false
    });

    gulp.watch(["src/*.pug", "src/templates/*.+(pug|svg)"], exports.html);
    gulp.watch("src/scss/**/*.+(scss|css)", exports.css);
    gulp.watch("src/js/**/*.js", exports.js);
    gulp.watch("src/assets/img/**/*.+(png|jpg|jpeg|gif|svg|ico)", exports.optimize_images);
    gulp.watch([
        "dist/*.html",
        "dist/css/**/*.css"
    ]).on('change', bs.reload);
}

exports.default = gulp.series(
    exports.css,
    exports.html,
    exports.js,
    exports.live_reload
);