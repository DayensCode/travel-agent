const gulp = require('gulp');
const fileInclude = require('gulp-file-include');
const sass = require('gulp-sass')(require('sass'));
//подключение scss файлов с помощью импортов
const sassGlob = require('gulp-sass-glob');
const server = require('gulp-server-livereload');
const clean = require('gulp-clean');
const fs = require('fs');
//в девтулз отображается исходный файл стилей
const sourceMaps = require('gulp-sourcemaps');
//если делается ошибка сборка не зависает
const plumber = require('gulp-plumber');
//вывод нотификаций
const notify = require('gulp-notify');
//собирает js
const webpack = require('webpack-stream');
//если файлы не изменились не обрабатыай их по нескольку раз
const changed = require('gulp-changed');

//оптимизированное удаление папки build
gulp.task('clean:dev', function (done) {
	if (fs.existsSync('./build/')) {
		return gulp
			.src('./build/', { read: false })
			.pipe(clean({ force: true }));
	}
	done();
});

const fileIncludeSetting = {
	prefix: '@@',
	basepath: '@file',
};

const plumberNotify = (title) => {
	return {
		errorHandler: notify.onError({
			title: title,
			message: 'Error <%= error.message %>',
			sound: false,
		}),
	};
};

//сборка html
gulp.task('html:dev', function () {
	return (
		gulp
			.src(['./src/html/**/*.html', '!./src/html/blocks/*.html'])//include-блоки собирать не нужно
			.pipe(changed('./build/', { hasChanged: changed.compareContents }))//по изменению любого html пересобери тот где он include
			.pipe(plumber(plumberNotify('HTML')))
			.pipe(fileInclude(fileIncludeSetting))
			.pipe(gulp.dest('./build/'))
	);
});

//сборка scss
gulp.task('sass:dev', function () {
	return (
		gulp
			.src('./src/scss/*.scss')
			.pipe(changed('./build/css/'))
			.pipe(plumber(plumberNotify('SCSS')))
			.pipe(sourceMaps.init())//инициализация плагина
			.pipe(sassGlob())
			.pipe(sass())//компиляция scss в css
			.pipe(sourceMaps.write())//запись названия иходного scss файла в девтулз
			.pipe(gulp.dest('./build/css/'))
	);
});

//сборка картинок
gulp.task('images:dev', function () {
	return gulp
		.src('./src/img/**/*')
		.pipe(changed('./build/img/'))
		.pipe(gulp.dest('./build/img/'));
});

//сборка шрифтов
gulp.task('fonts:dev', function () {
	return gulp
		.src('./src/fonts/**/*')
		.pipe(changed('./build/fonts/'))
		.pipe(gulp.dest('./build/fonts/'));
});

//сборка остальных файлов
gulp.task('files:dev', function () {
	return gulp
		.src('./src/files/**/*')
		.pipe(changed('./build/files/'))
		.pipe(gulp.dest('./build/files/'));
});

//сборка js
gulp.task('js:dev', function () {
	return gulp
		.src('./src/js/*.js')
		.pipe(changed('./build/js/'))
		.pipe(plumber(plumberNotify('JS')))
		.pipe(webpack(require('./../webpack.config.js')))//согласно экспортируемому вебпак конфигу
		.pipe(gulp.dest('./build/js/'));
});

const serverOptions = {
	livereload: true,
	open: true,
};

//запуск сервера с live-reload
gulp.task('server:dev', function () {
	return gulp.src('./build/').pipe(server(serverOptions));
});

//отслеживание изменений в исходных файлах и их апдейт в build
gulp.task('watch:dev', function () {
	gulp.watch('./src/scss/**/*.scss', gulp.parallel('sass:dev'));
	gulp.watch('./src/html/**/*.*', gulp.parallel('html:dev'));
	gulp.watch('./src/img/**/*', gulp.parallel('images:dev'));
	gulp.watch('./src/fonts/**/*', gulp.parallel('fonts:dev'));
	gulp.watch('./src/files/**/*', gulp.parallel('files:dev'));
	gulp.watch('./src/js/**/*.js', gulp.parallel('js:dev'));
});
