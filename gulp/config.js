var src = './src',
    dest  = './public';

module.exports = {
  css: {
    watch: src + '/stylus/**/*.styl',
    src: src + '/stylus/**/app.styl',
    dest: dest + '/css/'
  },
  browserify: {
    app: {
      watch: [src + '/code/**/*.*'],
      src: src + '/code/app.js',
      dest: dest + '/js/'
    }
  },
  assets: {
    watch: src + '/assets/**/*.*',
    src: src + '/assets/**/*.*',
    dest: dest
  },
  vendor: {
    watch: src + '/vendor/**/*.*',
    src: src + '/vendor/**/*.*',
    dest: dest + '/js/'
  },
  trim: {
    assets: {
      src: [src + '/assets/**/*.html', src + '/assets/**/*.json'],
      dest: src + '/assets/'
    },
    code: {
      src: src + '/code/**/*.*',
      dest: src + '/code/'
    },
    stylus: {
      src: src + '/stylus/**/*.*',
      dest: src + '/stylus/'
    }
  }
};
