var gulp = require('gulp'),
		browserSync = require('browser-sync').create();

gulp.task('server', function() {
	browserSync.init({
		server: {
			baseDir: "dist/"
		},
		files: ['dist/*.html', 'dist/*.css', 'dist/img/*.*']
	});
});