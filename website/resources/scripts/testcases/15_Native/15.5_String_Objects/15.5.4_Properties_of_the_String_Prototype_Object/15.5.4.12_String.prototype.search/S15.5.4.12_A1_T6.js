// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.12_A1_T6;
* @section: 15.5.4.12;
* @assertion: String.prototype.search (regexp);
* @description: Argument is x, and instance is new String, x is undefined variable;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.12_A1_T6",

path: "15.5.4.12",

description: "Argument is x, and instance is new String, x is undefined variable",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
//since ToString(undefined) evaluates to "undefined" search(undefined) evaluates to search("undefined")
if (new String("undefined").search(x) !== 0) {
  $ERROR('#1: var x; new String("undefined").search(x) === 0. Actual: '+new String("undefined").search(x) );
}
//
//////////////////////////////////////////////////////////////////////////////

var x;

 }
});

