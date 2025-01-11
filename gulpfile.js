const gulp = require('gulp');
const sass = require('gulp-sass')(import('sass'));
const imagemin = require('gulp-imagemin'); // Certifique-se de instalar o gulp-imagemin: npm install gulp-imagemin --save-dev

function styles(){
    return gulp.src('./src/images/**/*')
    .pipe(imagemin()) // Adicione o "."
    .pipe(gulp.dest('./dist/images'));

}

function images(){
    return gulp.src('./src/images/**/*')
    pipe(imagemin())
    .pipe(gulp.dest('./dist/images'));
}











exports.default = gulp.parallel(styles, images, scripts);
exports.watch = function() {
    gulp.watch('./src/styles/*.scsss',  gulp.parallel(styles))
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts))
}