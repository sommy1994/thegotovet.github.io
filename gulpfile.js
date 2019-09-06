var gulp = require("gulp");

gulp.task("copy", done => {
    gulp.src("dest/**", { sourcemaps: true })
    .pipe(gulp.dest("./"));

    done();
});
