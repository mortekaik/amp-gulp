var gulp = require('gulp'),
		sass = require('gulp-sass'),
		autoprefix = require('autoprefixer'),
		postcss = require('gulp-postcss'),
		cfg = require('../package.json').config;

gulp.task('sass', function() {
	return gulp.src(cfg.app.scss + '/**/*.{scss, sass}')
		.pipe(postcss([ autoprefix() ]))
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest(cfg.dist.css));
});

gulp.task('sass:watch', function() {
	gulp.watch(cfg.app.scss + '/**/*.{scss, sass}', ['sass']);
});