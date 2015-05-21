var gulp = require('gulp');
var karma = require('karma').server;
var bower = require('gulp-bower');

gulp.task('bower', function() {
  return bower({
    cwd: './public'
  });
});

gulp.task('test', ['bower'], function (done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done);
});

gulp.task('default', ['test']);