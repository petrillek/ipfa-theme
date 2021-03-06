//Gem versions
//compass (0.12.7)
//sass (3.2.19)
//breakpoint (2.0.5)
//if you use compass watch, run compass _0.12.7_ watch

var gulp = require('gulp');
var compass = require('gulp-compass');
var sasssrcs = [ './sass/*/*.scss', './sass/*.scss' ];
var autoprefix = require('gulp-autoprefixer');

gulp.task('compass', function() {
  gulp.src(sasssrcs)
      .pipe(compass({
        config_file: './config.rb',
        css: 'css',
        sass: 'sass'
      }))
      .pipe(autoprefix('last 2 versions', '> 1%', 'ie 9', 'ie 10'))
      .pipe(gulp.dest('css'));
});

gulp.task('watch', function(){
  gulp.watch(sasssrcs, ['compass']);
});
gulp.task('default', ['compass', 'watch']);
