var gulp = require('gulp'),
  stylus = require('gulp-stylus')

var paths = {
  styl: './styl/*.styl',
  css: './css'
}

gulp.task('stylus', function() {
  gulp.src(paths.styl)
    .pipe(stylus({
      compress: false
    }))
    .pipe(gulp.dest(paths.css))
})

gulp.task('default', ['stylus'])