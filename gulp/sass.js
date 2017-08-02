var gulp = require('gulp'),
		sass = require('gulp-sass'),
		autoprefix = require('autoprefixer'),
		postcss = require('gulp-postcss'),
		runseq = require('run-sequence'),
		cfg = require('../package.json').config;

gulp.task('sass', function() {
	return gulp.src(cfg.app.scss + '/**/*.{scss, sass}')
		.pipe(sass().on('error', sass.logError))
		.pipe(postcss([ autoprefix() ]))
		.pipe(gulp.dest(cfg.dist.css));
});

gulp.task('sass:watch', function() {
	// gulp.watch(cfg.app.scss + '/**/*.{scss, sass}', ['sass']);
	gulp.watch(cfg.app.scss + '/**/*.{scss, sass}', ()=>runseq('copy','sass', 'inject'));
});