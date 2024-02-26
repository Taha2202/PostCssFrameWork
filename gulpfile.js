var gulp = require('gulp');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');

gulp.task('css', function () {
    return gulp.src('./Src/style.css') // Use your third file that imports other CSS files
        .pipe(concat('bundle.css')) // Concatenate all CSS files into a single file named bundle.css
        .pipe(cleanCSS()) // Minify the concatenated CSS
        .pipe(gulp.dest('./Dist/Css'));
});
