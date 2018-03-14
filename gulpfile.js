var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('hello', function(){
  console.log('Hello Scott! Beginning your website optimization... ... ...');
})

gulp.task('sass', function(){
  return gulp.src('express_order/css/style.scss')
    .pipe(sass()) // using gulp-sass
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('watch', ['browserSync', 'sass'], function(){
  gulp.watch('express_order/css/style.scss', ['sass']);
  // Reload browser whenever HTML or JS files change
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/**/*.js', browserSync.reload);
})

gulp.task('browserSync', function(){
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})
