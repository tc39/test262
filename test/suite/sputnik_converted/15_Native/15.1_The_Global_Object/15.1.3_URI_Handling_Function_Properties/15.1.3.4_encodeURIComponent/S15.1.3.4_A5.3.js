// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.1.3.4_A5.3;
 * @section: 15.1.3.4;
 * @assertion: The length property of encodeURIComponent has the attribute ReadOnly;
 * @description: Checking if varying the length property fails;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.3.4_A5.3",

path: "15.1.3.4",

description: "Checking if varying the length property fails",

test: function testcase() {
   //CHECK#1
x = encodeURIComponent.length;
encodeURIComponent.length = Infinity;
if (encodeURIComponent.length !== x) {
  $ERROR('#1: x = encodeURIComponent.length; encodeURIComponent.length = Infinity; encodeURIComponent.length === x. Actual: ' + (encodeURIComponent.length));
}


 }
});

