var gulp = require('gulp'),
		uglify = require('gulp-uglify'),
		concat = require('gulp-concat'),
		sass = require('gulp-ruby-sass'),
		browserSync = require('browser-sync'),
		reload      = browserSync.reload;


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
    .pipe(gulp.dest('build/css/'))
    .pipe(reload({stream:true}));
});

gulp.task('move', function() {   //Moves basic files to build folder
    return gulp.src('./*.html')  //Change file ending, depending on files
      .pipe(gulp.dest('build'));
});

//Watches JS
gulp.task('watch', function() {
    gulp.watch('src/js/*.js', ['scripts', browserSync.reload]);
    gulp.watch('src/sass/sass/*.sass', ['styles']);
    gulp.watch('./*.html', ['move', browserSync.reload]);
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
			    baseDir: "./build/",
			    index: "index.html"
				}
    });
});

gulp.task('default',['scripts', 'styles', 'browser-sync', 'move', 'watch']);