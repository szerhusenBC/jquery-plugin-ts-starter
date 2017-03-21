# jquery-plugin-ts-starter
A simple starter project for developing jQuery plugins with Typescript and Webpack.

## Usage

### Getting started
At first you have to install all node modules:

```bash
npm install
```

Afterwards you can start the app with:

```bash
npm start
```

Then will then have a server running at **[http://localhost:3000](http://localhost:3000)** with hot code replacement and live reloading in the browser.

### Building a distribution
If you want to build a distribution, you have to execute

```bash
npm run dist
```

You will find the distribution under **/dist**.

### Testing
You can run the tests with

```bash
npm test
```

If you want to develop against the tests with hot reloading, you have to execute

```bash
npm run test:watch
```

The following technologies are used for writing and running tests:

* Test runner: [KarmaJS](https://karma-runner.github.io)
* Headless WebKit browser: [PhantomJS](http://phantomjs.org)
* Testing framework: [MochaJS](https://mochajs.org)
* BDD / TDD assertion library: [ChaiJS](http://chaijs.com)
* Library for spies, stubs and mocks: [SinonJS](http://sinonjs.org)

## Creator

**Stephan Zerhusen**

* <https://twitter.com/stzerhus>
* <https://github.com/szerhusenBC>

## Copyright and license

The code is released under the [MIT license](LICENSE?raw=true).

---------------------------------------

Please feel free to send me some feedback or questions!
