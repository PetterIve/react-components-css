const gulp = require('gulp');
const sass = require('gulp-sass');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');
const runSequence = require('run-sequence');
const tslint = require('gulp-tslint');
var del = require('del');

const sassFilesPath = './src/**/*.scss';
const buildPath = './lib';

gulp.task('default', ['build']);

gulp.task('build', () => {
    runSequence('tslint', ['sass-build', 'ts-build', 'mv-sass']);
});

gulp.task('tslint', () =>
gulp
    .src('./src/**/*.tsx')
    .pipe(
        tslint({
            formatter: 'verbose',
        })
    )
    .pipe(tslint.report())
);

gulp.task('ts-build', function() {
    return gulp
        .src(['./src/**/*.ts', './src/**/*.tsx'])
        .pipe(tsProject())
        .pipe(gulp.dest(buildPath));
});

gulp.task('sass-build', () => {
    return gulp
        .src(sassFilesPath)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(buildPath));
});

gulp.task('mv-sass', () => {
    gulp.src('./src/*.scss').pipe(gulp.dest(buildPath));
});

gulp.task('clean', function () {
    return del([
        'lib/**/*',
    ]);
});