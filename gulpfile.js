// Load plugins
var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	cleanCSS = require('gulp-clean-css');
	
// Styles
gulp.task('styles', function() {
  return gulp.src('assets/css/main.scss')
    .pipe(sass({ style: 'expanded', }))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('assets/css/styles'))
});

// Clean
gulp.task('cleanCSS', function() {
  return gulp.src(['assets/css/styles'], {read: false})
    .pipe(cleanCSS());
});

// Watch
gulp.task('watch', function() {
// Watch .scss files
    gulp.watch('assets/css/**/*.scss', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
      gulp.run('styles');
    });

});

gulp.task('default', ['watch', 'styles', 'cleanCSS']);