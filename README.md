signbit
===
[![NPM version][npm-image]][npm-url] [![Build Status][build-image]][build-url] [![Coverage Status][coverage-image]][coverage-url] [![Dependencies][dependencies-image]][dependencies-url]

> Returns a boolean indicating if the sign bit for a [single-precision floating-point number][ieee754] is on (true) or off (false).


## Installation

``` bash
$ npm install math-float32-signbit
```


## Usage

``` javascript
var signbit = require( 'math-float32-signbit' );
```

#### signbit( x )

Returns a `boolean` indicating if the sign bit for a [single-precision floating-point number][ieee754] is on (`true`) or off (`false`).

``` javascript
var toFloat32 = require( 'float64-to-float32' );

var bool = signbit( toFloat32( 4 ) );
// returns false

bool = signbit( toFloat32( -9.14e-34 ) );
// returns true

bool = signbit( 0 );
// returns false

bool = signbit( -0 );
// returns true
```


## Examples

``` javascript
var toFloat32 = require( 'float64-to-float32' );
var signbit = require( 'math-float32-signbit' );

var sign;
var x;
var i;

for ( i = 0; i < 100; i++ ) {
	x = Math.random()*100 - 50;
	x = toFloat32( x );
	sign = signbit( x );
	sign = ( sign ) ? 'true' : 'false';
	console.log( 'x: %d. signbit: %s.', x, sign );
}
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


---
## Tests

### Unit

This repository uses [tape][tape] for unit tests. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul][istanbul] as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


### Browser Support

This repository uses [Testling][testling] for browser testing. To run the tests in a (headless) local web browser, execute the following command in the top-level application directory:

``` bash
$ make test-browsers
```

To view the tests in a local web browser,

``` bash
$ make view-browser-tests
```

<!-- [![browser support][browsers-image]][browsers-url] -->


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2016. The [Compute.io][compute-io] Authors.


[npm-image]: http://img.shields.io/npm/v/math-float32-signbit.svg
[npm-url]: https://npmjs.org/package/math-float32-signbit

[build-image]: http://img.shields.io/travis/math-io/float32-signbit/master.svg
[build-url]: https://travis-ci.org/math-io/float32-signbit

[coverage-image]: https://img.shields.io/codecov/c/github/math-io/float32-signbit/master.svg
[coverage-url]: https://codecov.io/github/math-io/float32-signbit?branch=master

[dependencies-image]: http://img.shields.io/david/math-io/float32-signbit.svg
[dependencies-url]: https://david-dm.org/math-io/float32-signbit

[dev-dependencies-image]: http://img.shields.io/david/dev/math-io/float32-signbit.svg
[dev-dependencies-url]: https://david-dm.org/dev/math-io/float32-signbit

[github-issues-image]: http://img.shields.io/github/issues/math-io/float32-signbit.svg
[github-issues-url]: https://github.com/math-io/float32-signbit/issues

[tape]: https://github.com/substack/tape
[istanbul]: https://github.com/gotwarlost/istanbul
[testling]: https://ci.testling.com

[compute-io]: https://github.com/compute-io/
[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985
