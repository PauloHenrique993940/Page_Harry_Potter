const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin'); // Certifique-se de instalar o gulp-imagemin: npm install gulp-imagemin --save-dev

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/css'));
}

function images() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin()) // Adicione o "."
        .pipe(gulp.dest('./dist/images'));
}

exports.default = gulp.parallel(styles, images);
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles)); // Corrigido o erro no nome do arquivo
    gulp.watch('./src/images/**/*', gulp.parallel(images)); // Adicionado para monitorar imagens
};
