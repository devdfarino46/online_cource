const bs = require('browser-sync').create();

module.exports = function bs_html() {
    bs.init({
        server: {
            baseDir: "dist/",
        },
        // notify: false,
        // online: true,
        // tunnel: true,
        open: false
    });
}