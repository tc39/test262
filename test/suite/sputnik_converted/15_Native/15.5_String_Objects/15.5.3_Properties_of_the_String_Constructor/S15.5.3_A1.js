// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.3_A1;
* @section: 15.5.3, 15.5.4;
* @assertion: String has length property whose value is 1;
* @description: Checking String.length;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.3_A1",

path: "15.5.3, 15.5.4",

description: "Checking String.length",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
// CHECK#
if (String.length !== 1) {
  $ERROR('String has length property whose value is 1. Actual: String.length==='+String.length);
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

