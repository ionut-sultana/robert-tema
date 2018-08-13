var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var csso = require('gulp-csso');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');
var autoprefixer = require('autoprefixer');
var postcss      = require('gulp-postcss');
 



gulp.task('less', function () {
  return watch('less/**/*.less', { ignoreInitial: false })
    .pipe(less({
    // compile less
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    // Prevents errors from breaking the terminal task
	.pipe(plumber())
	.pipe(csso())
	// Adds autoprefixer to css output
	.pipe(postcss([ autoprefixer() ]))
    .pipe(gulp.dest('./css'));
});

