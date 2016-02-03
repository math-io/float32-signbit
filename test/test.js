'use strict';

// MODULES //

var tape = require( 'tape' );
var round = require( 'math-round' );
var pow = require( 'math-power' );
var toFloat32 = require( 'float64-to-float32' );
var signbit = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( typeof signbit === 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a boolean', function test( t ) {
	t.equal( typeof signbit(5), 'boolean', 'returns a boolean' );
	t.end();
});

tape( 'the function returns a boolean indicating if a sign bit is on (true) or off (false)', function test( t ) {
	var bool;
	var sign;
	var frac;
	var exp;
	var x;
	var i;

	for ( i = 0; i < 5e3; i++ ) {
		if ( Math.random() < 0.5 ) {
			sign = -1;
		} else {
			sign = 1;
		}
		frac = Math.random() * 10;
		exp = round( Math.random()*44 ) - 22;
		x = sign * frac * pow( 10, exp );
		x = toFloat32( x );
		bool = signbit( x );
		if ( sign < 0 ) {
			t.equal( bool, true, 'returns true for ' + x );
		} else {
			t.equal( bool, false, 'returns false for ' + x );
		}
	}
	t.end();
});
