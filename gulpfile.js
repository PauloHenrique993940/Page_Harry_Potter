import gulp from 'gulp';
import sass from 'gulp-sass';
import dartSass from 'sass';
import imagemin from 'gulp-imagemin';

sass.compiler = dartSass;

// Função para processar arquivos SCSS
function styles() {
    return gulp.src('./src/styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/styles'));
}

// Função para otimizar imagens
function images() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

// Tarefa padrão com watch
function defaultTask() {
    gulp.watch('./src/styles/**/*.scss', styles);
    gulp.watch('./src/images/**/*', images);
}

export { styles, images, defaultTask as default };
