const gulp = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const notifier = require('node-notifier');
const c = require('ansi-colors');

const errorMessage = err => {

    console.log(c.red(err.messageFormatted));

    notifier.notify({
        title: 'Błąd SASS!',
        message: err.messageFormatted
    });
}

// gulp.task('browser-sync', () => {
//     browserSync.init({
//         server: {
//             baseDir: "./"
//         }
//     });
// });

gulp.task('sass', () => {
    return gulp.src('./scss/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: "compressed" //compact, compressed, expanded
        }).on('error', errorMessage))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
});

// gulp.task('watch', () => {
//     gulp.watch('./scss/**/*.scss', gulp.series('sass');
//     gulp.watch("*.html").on('change', browserSync.reload);
// });

gulp.task('serve', gulp.series('sass', function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch('./scss/**/*.scss', gulp.series('sass'));
    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch("*.js").on('change', browserSync.reload);
}));

gulp.task('default', gulp.series('serve'));
