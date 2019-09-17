'use strict';

//Подключаем модули галпа
let gulp = require('gulp'),
      concat = require('gulp-concat'),
      autoprefixer = require('gulp-autoprefixer'),
      cleanCSS = require('gulp-clean-css'),
      uglify = require('gulp-uglify'),
      del = require('del'),
      browserSync = require('browser-sync').create(),
      sourcemaps = require('gulp-sourcemaps'),
      sass = require('gulp-sass');

//Порядок подключения css файлов
// let cssFiles = [
//    './src/css/main.css',
//    './src/css/media.css'
// ]

let cssFiles = [
   './src/scss/style.scss'
]

//Порядок подключения js файлов
let jsFiles = [
   './src/js/lib.js',
   './src/js/main.js'
]

//Таск на стили CSS
function styles() {
   //Шаблон для поиска файлов SCSS
   //Всей файлы по шаблону './src/scss/**/*.scss'
   return gulp.src(cssFiles)
   .pipe(sourcemaps.init())
   .pipe(sass())
   //Объединение файлов в один
   .pipe(concat('style.css'))
   //Добавить префиксы
   .pipe(autoprefixer({
      cascade: false
   }))
   //Минификация CSS
   .pipe(cleanCSS({
      level: 2
   }))
   .pipe(sourcemaps.write('./'))
   //Выходная папка для стилей
   .pipe(gulp.dest('./build/css'))
   .pipe(browserSync.stream());
}

//Таск на скрипты JS
function scripts() {
   //Шаблон для поиска файлов JS
   //Всей файлы по шаблону './src/js/**/*.js'
   return gulp.src(jsFiles)
   //Объединение файлов в один
   .pipe(concat('script.js'))
   //Минификация JS
   .pipe(uglify({
      toplevel: true
   }))
   //Выходная папка для скриптов
   .pipe(gulp.dest('./build/js'))
   .pipe(browserSync.stream());
}

//Удалить всё в указанной папке
function clean() {
   return del(['build/*'])
}

//Просматривать файлы
function watch() {
   browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  //Следить за CSS файлами
//   gulp.watch('./src/css/**/*.css', styles)
  gulp.watch('./src/scss/**/*.scss', styles)
  //Следить за JS файлами
  gulp.watch('./src/js/**/*.js', scripts)
  //При изменении HTML запустить синхронизацию
  gulp.watch("./*.html").on('change', browserSync.reload);
}

//Таск вызывающий функцию styles
gulp.task('styles', styles);
//Таск вызывающий функцию scripts
gulp.task('scripts', scripts);
//Таск для очистки папки build
gulp.task('del', clean);
//Таск для отслеживания изменений
gulp.task('watch', watch);
//Таск для удаления файлов в папке build и запуск styles и scripts
gulp.task('build', gulp.series(clean, gulp.parallel(styles,scripts)));
//Таск запускает таск build и watch последовательно
gulp.task('dev', gulp.series('build','watch'));