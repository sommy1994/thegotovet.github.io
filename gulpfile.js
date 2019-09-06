var gulp = require("gulp");

gulp.task("copy", done => {
    gulp.src("dist/**", { sourcemaps: true })
    .pipe(gulp.dest("./"));

    done();
});
