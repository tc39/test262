// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.7.1.1_A2;
 * @section: 15.7.1.1;
 * @assertion: Number() returns +0;
 * @description: Call Number() and check result;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.7.1.1_A2",

path: "15_Native\15.7_Number_Objects\15.7.1_The_Number_Constructor_Called_as_a_Function\S15.7.1.1_A2.js",

assertion: "Number() returns +0",

description: "Call Number() and check result",

test: function testcase() {
   //CHECK#1
if( typeof Number() !== "number" ) {
  $ERROR('#1: typeof Number() should be "number", actual is "'+typeof Number()+'"');
}

//CHECK#2
if( Number() !== 0 ) {
  $ERROR('#2: Number() === 0, actual is '+Number());
} else if( 1/Number() !== Number.POSITIVE_INFINITY ) {
  $ERROR('#2: Number() === +0, actual is '+Number());
}


 }
});

