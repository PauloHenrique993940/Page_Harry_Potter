const gulp = require('gulp')(require('gulp'));
const imagemin = require('gulp-imagemin'); // Importa corretamente o gulp-imagemin
const sass = require('gulp-sass')(require('sass')); // Importa o gulp-sass
const uglify = require('gulp-uglify'); // Importa o gulp-uglify

// Função para processar os arquivos SASS
function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' })) // Comprime o CSS
        .pipe(gulp.dest('./dist/css')); // Salva na pasta dist/css
}

// Função para otimizar imagens
function images() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin()) // Aplica o plugin gulp-imagemin
        .pipe(gulp.dest('./dist/images')); // Salva na pasta dist/images
}

// Exporta as tarefas padrão
exports.default = gulp.parallel(styles, images);

// Exporta a tarefa de observação
exports.watch = function () {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
};