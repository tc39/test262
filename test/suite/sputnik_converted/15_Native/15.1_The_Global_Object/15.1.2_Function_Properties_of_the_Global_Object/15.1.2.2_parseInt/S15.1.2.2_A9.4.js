// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.1.2.2_A9.4;
 * @section: 15.1.2.2;
 * @assertion: The length property of parseInt is 2;
 * @description: parseInt.length === 2;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.2.2_A9.4",

path: "15.1.2.2",

description: "parseInt.length === 2",

test: function testcase() {
   //CHECK#1
if (parseInt.length !== 2) {
  $ERROR('#1: parseInt.length === 2. Actual: ' + (parseInt.length));
} 


 }
});

