/**
 * Created by Angela on 2016/7/23.
 */


var gulp = require('gulp');
/* generate file version hashcode */
var rev = require('gulp-rev');
/* with the version of files to replace normal files */
var revReplace = require('gulp-rev-replace');
/* combined all css file into one file and combined all js file into one file */
var useref = require('gulp-useref');
/* operate file as stream */
var filter = require('gulp-filter');
/* compress js files */
var uglify = require('gulp-uglify');
/* compress css files */
var csso = require('gulp-csso');

gulp.task('default',function () {
	var jsFilter = filter('**/*.js', {restore: true});
	var cssFilter = filter('**/*.css', {restore: true});
	var indexHtmlFilter = filter(['**/*', '!**/index.html'], {restore: true});

	gulp.src('src/img/*.{png,jpg,jpeg,gif,ico}')
	    .pipe(gulp.dest('dist/img'));
	return gulp.src('src/index.html')
	    .pipe(useref())
	    .pipe(jsFilter)
	    .pipe(uglify())
	    .pipe(jsFilter.restore)
	    .pipe(cssFilter)
	    .pipe(csso())
	    .pipe(cssFilter.restore)
	    .pipe(indexHtmlFilter)
	    .pipe(rev())
	    .pipe(indexHtmlFilter.restore)
	    .pipe(revReplace())
	    .pipe(gulp.dest('dist'));
});