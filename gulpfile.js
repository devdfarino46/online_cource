const gulp = require('gulp');
const requireDir = require('require-dir');
const tasks = requireDir('./tasks');

exports.css = tasks.css;
exports.html = tasks.html;
exports.js = tasks.js;
exports.bs_html = tasks.bs_html;
exports.watching = tasks.watching;
exports.optimize_images = tasks.optimize_images;
exports.image_resize = tasks.image_resize;
exports.css_fonts_gen = tasks.css_fonts_gen;
exports.gfonts = tasks.gfonts;

exports.default = gulp.parallel(
    exports.css,
    exports.html,
    exports.js,
    exports.bs_html,
    exports.watching
);