var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');


gulp.task('default', function() {
  return gulp.src('src/js/*.js')
	  .pipe(concat('js/app.min.js'))
	  .pipe(uglify())
	  .pipe(gulp.dest('build'));
});