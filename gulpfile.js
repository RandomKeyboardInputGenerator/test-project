var gulp = require('gulp');
var jade = require('jade');
var gulpJade = require('gulp-jade');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

// Jade templates
gulp.task('all-questions-base-template', function(done){  
    return gulp.src('src/app/all-questions-base/*.jade')
        .pipe(gulpJade({
            jade: jade,
            pretty: true
        }))
        .pipe(gulp.dest('src/app/all-questions-base/html'));
});
gulp.task('profile-base-modal-template', function(done){  
    return gulp.src('src/app/profile-base-modal/*.jade')
        .pipe(gulpJade({
            jade: jade,
            pretty: true
        }))
        .pipe(gulp.dest('src/app/profile-base-modal/html'));
});
gulp.task('single-question-base-template', function(done){  
    return gulp.src('src/app/single-question-base/*.jade')
        .pipe(gulpJade({
            jade: jade,
            pretty: true
        }))
        .pipe(gulp.dest('src/app/single-question-base/html'));
});
gulp.task('app-template', function(done){  
    return gulp.src('src/app/*.jade')
        .pipe(gulpJade({
            jade: jade,
            pretty: true
        }))
        .pipe(gulp.dest('src/app/html'));
});

// Watch the jade templates
gulp.task('watch-app-templates', function() {
	gulp.watch('src/app/*.jade', ['app-template']);
	gulp.watch('src/app/all-questions-base/*.jade', ['all-questions-base-template']);
	gulp.watch('src/app/profile-base-modal/*.jade', ['profile-base-modal-template']);
	gulp.watch('src/app/single-question-base/*.jade', ['single-question-base-template']);
});

// Styles
gulp.task('all-questions-base-style', function() {
    return gulp.src('src/app/all-questions-base/*.scss')
		.pipe(sass())
		.pipe(autoprefixer('last 1 version', '> 1%', 'ie 8', 'ie 7'))
		.pipe(gulp.dest('src/app/all-questions-base/css'));
});
gulp.task('profile-base-modal-style', function(done){  
    return gulp.src('src/app/profile-base-modal/*.scss')
		.pipe(sass())
		.pipe(autoprefixer('last 1 version', '> 1%', 'ie 8', 'ie 7'))
		.pipe(gulp.dest('src/app/profile-base-modal/css'));
});
gulp.task('single-question-base-style', function(done){  
    return gulp.src('src/app/single-question-base/*.scss')
		.pipe(sass())
		.pipe(autoprefixer('last 1 version', '> 1%', 'ie 8', 'ie 7'))
		.pipe(gulp.dest('src/app/single-question-base/css'));
});
gulp.task('app-style', function(done){  
    return gulp.src('src/app/*.scss')
		.pipe(sass())
		.pipe(autoprefixer('last 1 version', '> 1%', 'ie 8', 'ie 7'))
		.pipe(gulp.dest('src/app/css'));
});

// Watch the sass files
gulp.task('watch-styles', function() {
	gulp.watch('src/app/*.scss', ['app-style']);
	gulp.watch('src/app/all-questions-base/*.scss', ['all-questions-base-style']);
	gulp.watch('src/app/profile-base-modal/*.scss', ['profile-base-modal-style']);
	gulp.watch('src/app/single-question-base/*.scss', ['single-question-base-style']);
});

gulp.task('default', ['single-question-base-template', 'profile-base-modal-template', 'all-questions-base-template', 'app-template', 'app-style', 'all-questions-base-style', 'profile-base-modal-style', 'single-question-base-style', 'watch-styles', 'watch-app-templates']);