'use strict';

var toFloat32 = require( 'float64-to-float32' );
var signbit = require( './../lib' );

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