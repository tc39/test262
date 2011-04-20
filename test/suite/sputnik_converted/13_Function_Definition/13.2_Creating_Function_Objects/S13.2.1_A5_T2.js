// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S13.2.1_A5_T2;
* @section: 13.2.1;
* @assertion: Closures are admitted;
* @description: Returning a function that approximates the derivative of f 
* using an interval of dx, which should be appropriately small;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S13.2.1_A5_T2",

path: "13_Function_Definition\13.2_Creating_Function_Objects\S13.2.1_A5_T2.js",

assertion: "Closures are admitted",

description: "Returning a function that approximates the derivative of f",

test: function testcase() {
   // Return a function that approximates the derivative of f
// using an interval of dx, which should be appropriately small.
function derivative(f, dx) {
    return function(x) {
      return (f(x + dx) - f(x)) / dx;
    };
}

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (Math.abs(derivative(Math.sin, 0.0001)(0) - derivative(Math.sin, 0.0001)(2*Math.PI)) >= 1/65536.0) {
	$ERROR('#1: Math.abs(derivative(Math.sin, 0.0001)(0) - derivative(Math.sin, 0.0001)(2*Math.PI)) <= 1/65536.0');
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

