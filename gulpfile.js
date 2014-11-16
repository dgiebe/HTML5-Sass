var gulp = require('gulp'),
		uglify = require('gulp-uglify'),
		concat = require('gulp-concat'),
		sass = require('gulp-ruby-sass');


gulp.task('scripts', function() {
  return gulp.src('src/js/*.js')
	  .pipe(concat('js/app.min.js'))
	  .pipe(uglify())
	  .pipe(gulp.dest('build'));
});

gulp.task('styles', function() {
    return gulp.src('src/sass/style.sass')
    .pipe(sass({
    	style: 'compressed'
    }))
    .pipe(gulp.dest('build/css/'));
});

//Watches JS
gulp.task('watch', function() {
    gulp.watch('src/js/*.js', ['scripts']);
});


gulp.task('default',['scripts', 'watch']);