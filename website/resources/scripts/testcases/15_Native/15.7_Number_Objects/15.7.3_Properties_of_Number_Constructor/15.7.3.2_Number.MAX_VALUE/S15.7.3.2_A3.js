// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.7.3.2_A3;
 * @section: 15.7.3.2;
 * @assertion: Number.MAX_VALUE is DontDelete;
 * @description: Checking if deleting Number.MAX_VALUE fails;
 * @strict_mode_negative
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.7.3.2_A3",

path: "15.7.3.2",

description: "Checking if deleting Number.MAX_VALUE fails",

test: function testcase() {
   // CHECK#1
if (delete Number.MAX_VALUE !== false) {
  $ERROR('#1: delete Number.MAX_VALUE === false');
}

 }
});

