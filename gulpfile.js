var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

function css_style(done) {
    gulp.src('./scss/**/*.scss')
    .pipe(sass({
        errorLogToConsole: true,
        outputStyle: 'compressed'
    }))
    .on('error', console.error.bind(console))
    .pipe(autoprefixer({
        overrideBrowserslist: ['last 2 version'],
        cascade: false 
    }))
    .pipe(rename({suffix: '.min'}))
    .pipe( gulp.dest('./css/') );

done();
}

function print(done) {
    console.log('hi');
    done();
}

function watchSass() {
    gulp.watch('./scss/**/*', css_style);
}

// gulp.task(css_style);
// gulp.task(print);

gulp.task('default', gulp.series(print, watchSass));