var gulp        = require('gulp');
var browserify  = require('browserify');
var babelify    = require('babelify');
var source      = require("vinyl-source-stream");
var production  = require('../config').production;
var config      = require('../config').browserify;
var beep        = require('beepbeep');

var errorHandler = function (error) {
  console.log(error.toString());
  beep();
  this.emit('end');
};

gulp.task('browserify-app', function(){
  var b = browserify({
    debug: !production
  })
  .transform(babelify);
  b.add(config.app.src);
  return b.bundle()
    .on('error', errorHandler)
    .pipe(source('app.js'))
    .pipe(gulp.dest(config.app.dest));
});

gulp.task('browserify', ['browserify-app']);
