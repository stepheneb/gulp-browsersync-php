import gulp from 'gulp';
import browserSync from 'browser-sync';
import connect from 'gulp-connect-php';

const bsServer = browserSync.create();

function serve(done) {
  connect.server({
    base: './public',
    port: 8001
  }, done);
}

function bsProxy(done) {
  bsServer.init({
    proxy: '127.0.0.1:8001',
    port: 8910
  }, done);
}

function reload(done) {
  bsServer.reload();
  done();
}

const watch = () => gulp.watch('public/*.php', reload);

const dev = gulp.series(serve, bsProxy, watch);

export default dev;
