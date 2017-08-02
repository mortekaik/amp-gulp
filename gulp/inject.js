var gulp = require('gulp'),
		replace = require('gulp-replace'),
		cfg = require('../package.json').config,
		fs = require('fs');
		

gulp.task('inject', function() {
	return gulp.src(['dist/index.html'])
	.pipe(replace('<link rel="stylesheet" href="css/app.css">', function() {
		var css = fs.readFileSync(cfg.dist.css + '/app.css', "utf8");
		return '<style amp-custom>\n' + css + '\n</style>';
	}))
	.pipe(gulp.dest('dist/'));
});