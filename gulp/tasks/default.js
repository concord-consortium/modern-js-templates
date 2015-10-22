var gulp = require('gulp');
var config = require('../config');

gulp.task('watch', function() {
    gulp.watch(config.css.watch,                  ['css']);
    gulp.watch(config.browserify.app.watch,       ['browserify-app']);
    gulp.watch(config.assets.watch,               ['assets']);
});

gulp.task('build-all', ['browserify-app', 'css', 'assets']);

gulp.task('default', ['build-all', 'watch']);
