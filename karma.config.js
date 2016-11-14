module.exports = function(config) {
  config.set({
    basePath: './',
    browsers: ['PhantomJS'],
    frameworks: [ 'browserify', 'mocha', 'chai', 'chai-as-promised'],
    files: ['./node_modules/es6-promise/dist/es6-promise.auto.js', './test/**/*.js'],
    preprocessors: {
      './test/**/*.js': [ 'browserify' ]
    },
    browserify: {
      debug: true
    },
    reporters: ['mocha'],
    singleRun: true
  })
}
