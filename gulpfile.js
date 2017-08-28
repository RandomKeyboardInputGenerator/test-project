var gulp = require('gulp');
var jade = require('jade');
var gulpJade = require('gulp-jade');

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

gulp.task('default', ['app-templates', 'watch-app-templates']);