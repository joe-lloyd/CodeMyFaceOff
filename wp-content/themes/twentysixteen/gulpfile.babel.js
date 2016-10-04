import gulp from "gulp";
import plumber from "gulp-plumber";
import gutil from "gulp-util";
import sass from "gulp-sass";
import sassGlob from "gulp-sass-glob";
import concat from "gulp-concat";
import sourcemaps from "gulp-sourcemaps";
import bump from "gulp-bump";

//  Directories
const distPath = {
	src: "./dist/"
};

const scssPaths = {
	src: "./scss/"
};

const onError = (err) => {
	console.log("An error occurred:", gutil.colors.magenta(err.message));
	gutil.beep();
	this.emit("end");
};

// Basic usage:
// Will patch the version

gulp.task('bump', () => {
	gulp.src('./package.json')
		.pipe(bump())
		.pipe(gulp.dest('./'));
})
//  Build styles for the project
gulp.task("css", () => {
	gulp.src(`${scssPaths.src}/base.scss`)
		.pipe(plumber({ errorHandler: onError }))
		.pipe(sourcemaps.init())
		.pipe(sassGlob())
		.pipe(sass({
			outputStyle: "compressed",
			errLogToConsole: true,
			includePaths: [
				"./node_modules/normalize-scss/sass/",
				"./node_modules/bootstrap-sass/assets/stylesheets/",
				"./node_modules/bourbon/app/assets/stylesheets/"
			]
		}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(distPath.src));
});

// build the css files
gulp.task("build", ["css:build"]);

// watch the file changes
gulp.task("css:watch", () => {
	gulp.watch(`${scssPaths.src}**/*.scss`, ["css", "bump"]);
});

gulp.task("css:build", ["css"], () => {
	gulp.src(`${scssPaths.src}**/app.scss`)
		.pipe(concat("app.min.css"))
		.pipe(gulp.dest(distPath.src));
});