// Karma configuration
// based on https://medium.com/@fay_jai/getting-started-on-testing-with-typescript-reactjs-and-webpack-a45a72f4f603#.1bxgmsozo
// and https://github.com/AngularClass/angular2-webpack-starter/blob/master/config/karma.conf.js
const webpackConfig = require('./webpack.config.js')('dev');

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine-jquery', 'jasmine'],

        // list of files / patterns to load in the browser
        files: [
            'src/**/*.spec.ts',
            'src/**/*.spec.tsx'
        ],

        // list of files to exclude
        exclude: [],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'src/**/*.spec.ts': ['webpack', 'sourcemap'], // Using karma-webpack npm module
            'src/**/*.spec.tsx': ['webpack', 'sourcemap'] // Using karma-webpack npm module
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['mocha'],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        /*
         * By default, Karma loads all sibling NPM modules which have a name
         * starting with karma-*. You can also explicitly list plugins you want
         * to load via the plugins configuration setting.
         */
        // plugins: [
        //     'karma-*'
        // ],

        // enable / disable watching file and executing tests whenever any file changes
        // handled by CLI
        // autoWatch: false,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        // handled by CLI
        //singleRun: true,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity,

        /*
         * This field is necessary because we are using webpack as a preprocessor.
         * You will need to specify the webpack configuration (although in this
         * case, we are simply leveraging the existing webpack.config.js file).
         *
         * If you have a different webpack.config.js file that's used for testing
         * purposes, you can specify that here.
         */
        webpack: webpackConfig,

        // Webpack please don't spam the console when running in karma!
        webpackMiddleware: {
            // webpack-dev-middleware configuration
            // i.e.
            noInfo: true,
            // and use stats to turn off verbose output
            stats: {
                // options i.e.
                chunks: false
            }
        }
    })
};