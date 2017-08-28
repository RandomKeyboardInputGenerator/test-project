var gulp = require('gulp');
var pug = require('pug');
var gulpPug = require('gulp-pug');

// Jade templates
gulp.task('app-templates', function(done){  
    return gulp.src('src/app/templates/*.jade')
        .pipe(gulpPug({
            pug: pug,
            pretty: true
        }))
        .pipe(gulp.dest('src/app/templates/html'));
});

// Watch the jade templates
gulp.task('watch-app-templates', function() {
	gulp.watch('src/app/templates/*.jade', ['app-templates']);
});

gulp.task('default', ['app-templates', 'watch-app-templates']);