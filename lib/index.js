'use strict';

// MODULES //

var toWord = require( 'math-float32-to-word' );


// SIGNBIT //

/**
* FUNCTION: signbit( x )
*	Returns a boolean indicating if the sign bit is on (true) or off (false).
*
* @param {Number} x - single-precision floating-point number
* @returns {Boolean} boolean indicating if sign bit is on or off
*/
function signbit( x ) {
	// Convert `x` to an unsigned 32-bit integer corresponding to the value's IEEE 754 binary representation:
	var w = toWord( x );

	// Shift off all bits which are not the sign bit and check if the sign bit is on:
	return ( w >>> 31 ) ? true : false;
} // end FUNCTION signbit()


// EXPORTS //

module.exports = signbit;
