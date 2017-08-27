var gulp = require('gulp');
var jade = require('jade');
var gulpJade = require('gulp-jade');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

// Jade templates
gulp.task('app-templates', function(done){  
    return gulp.src('src/app/templates/*.jade')
        .pipe(gulpJade({
            jade: jade,
            pretty: true
        }))
        .pipe(gulp.dest('src/app/templates/html'));
});

// Watch the jade templates
gulp.task('watch-app-templates', function() {
	gulp.watch('src/app/templates/*.jade', ['app-templates']);
});

// Styles
gulp.task('app-styles', function(done){  
    return gulp.src('src/app/styles/*.scss')
		.pipe(sass())
		.pipe(autoprefixer('last 1 version', '> 1%', 'ie 8', 'ie 7'))
		.pipe(gulp.dest('src/app/styles/css'));
});

// Watch the sass files
gulp.task('watch-styles', function() {
	gulp.watch('src/app/styles/*.scss', ['app-styles']);
});

gulp.task('default', ['app-templates', 'app-styles', 'watch-styles', 'watch-app-templates']);