"use strict";

const { src, dest } = require("gulp");
const gulp        = require('gulp');
const browsersync = require('browser-sync').create();
const plumber   = require("gulp-plumber");
const autoprefixer = require("gulp-autoprefixer");
const cssbeautify = require("gulp-cssbeautify");
const rigger = require("gulp-rigger");
const babel = require("gulp-babel");
const del = require("del");
const prettyHtml = require('gulp-pretty-html');
const sass = require('gulp-sass');
const webpack = require('webpack-stream');
sass.compiler = require('node-sass');

/* Paths to source/build/watch files
=========================*/

var path = {
  build: {
    html: "dist/",
    js: "dist/assets/js/",
    css: "dist/assets/css/",
    images: "dist/assets/images/",
    fonts: "dist/assets/fonts/",
    libs: "dist/assets/libs/",
  },
  src: {
    html: "src/**/*.{htm,html,php}",
    js: "src/assets/js/script.js",
    css: "src/assets/sass/style.scss",
    images: "src/assets/images/**/*.{jpg,png,svg,gif,ico}",
    fonts: "src/assets/fonts/**/*.{ttf,eot,woff,woff2}",
    libs: "src/assets/libs/**/*.*",
  },
  watch: {
    html: "src/**/*.{htm,html,php}",
    js: "src/assets/js/**/*.js",
    css: "src/assets/sass/**/*.scss",
    images: "src/assets/images/**/*.{jpg,png,svg,gif,ico}",
    fonts: "src/assets/fonts/**/*.{ttf,eot,woff,woff2}",
    libs: "src/assets/libs/**/*.*",
  },
  clean: "./dist"
};

/* Tasks
=========================*/

function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: "./dist/",
      serveStaticOptions: {
        extensions: ['html']
      }
    },
    port: 3000
  });
  done();
}

function browserSyncReload(done) {
  browsersync.reload();
  done();
}

function html() {
  return src(path.src.html, { base: "src/" })
    .pipe(plumber())
    .pipe(rigger())
    .pipe(prettyHtml({
      indent_size: 2,
      indent_char: ' ',
      unformatted: ['code', 'pre', 'em', 'strong', 'span', 'i', 'b', 'br', 'svg']
    }))
    .pipe(dest(path.build.html))
    .pipe(browsersync.stream());
}

function css() {
  return src(path.src.css, { base: "./src/assets/sass/" })
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cssbeautify())
    .pipe(dest(path.build.css))
    .pipe(browsersync.stream());
}

function js() {
  return src(path.src.js, { base: "./src/assets/js/" })
    .pipe(plumber())
    .pipe(rigger())
    .pipe(webpack({
      output: {
        filename: "app.js"
      },
      optimization:{
        minimize: true,
      }
    }))
    .pipe(
      babel({
        presets: ["@babel/env"]
      })
    )
    .pipe(dest(path.build.js))
    .pipe(browsersync.stream());
}

function images() {
  return src(path.src.images).pipe(dest(path.build.images));
}

function fonts() {
  return src(path.src.fonts).pipe(dest(path.build.fonts));
}

function libs() {
  return src(path.src.libs).pipe(dest(path.build.libs));
}

function clean() {
  return del(path.clean);
}

function watchFiles() {
  gulp.watch([path.watch.html], html);
  gulp.watch([path.watch.css], css);
  gulp.watch([path.watch.js], js);
  gulp.watch([path.watch.images], images);
  gulp.watch([path.watch.fonts], fonts);
  gulp.watch([path.watch.libs], libs);
}

const build = gulp.series(
  clean,
  gulp.parallel(html, css, js, images, fonts, libs)
);

const watch = gulp.parallel(build, watchFiles, browserSync);

// export tasks
exports.html = html;
exports.css = css;
exports.js = js;
exports.images = images;
exports.fonts = fonts;
exports.libs = libs;
exports.clean = clean;
exports.build = build;
exports.watch = watch;
exports.default = watch;