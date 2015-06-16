/**
 * Created by ehealthafrica on 6/15/15.
 */

var gulp = require('gulp'),
    gulputil = require('gulp-util'),
    concat = require('gulp-concat'),
    shell  = require('gulp-shell'),
    json = require('gulp-json-wrapper');

gulp.task('config', function () {
    gulp.src('./app/config/*.js')
        .pipe(json({
          src: 'config.json',
          namespace: 'config'
        }))
        .pipe(concat('config.js'))
        .pipe(gulp.dest('./app/config'));
});
gulp.task('test', shell.task([
  'jasmine-node spec'
]));
gulp.task('default',['config'], function(){
  return gulputil.log('Gulp is up and running!')
});