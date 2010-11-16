// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.15_A1_T6;
* @section: 15.5.4.15;
* @assertion: String.prototype.substring (start, end);
* @description: Arguments are x and number, and instance is new String, x is undefined variable;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.15_A1_T6",

path: "15.5.4.15",

description: "Arguments are x and number, and instance is new String, x is undefined variable",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (new String("undefined").substring(x,3) !== "und") {
  $ERROR('#1: var x; new String("undefined").substring(x,3) === "und". Actual: '+new String("undefined").substring(x,3) );
}
//
//////////////////////////////////////////////////////////////////////////////

var x;

 }
});

