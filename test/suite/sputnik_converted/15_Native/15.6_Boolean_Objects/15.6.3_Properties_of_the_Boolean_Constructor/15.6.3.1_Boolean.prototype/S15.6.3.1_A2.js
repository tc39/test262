// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.6.3.1_A2;
 * @section: 15.6.3.1;
 * @assertion: Boolean.prototype has the attribute ReadOnly;
 * @description: Checking if varying the Boolean.prototype property fails;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.6.3.1_A2",

path: "15.6.3.1",

description: "Checking if varying the Boolean.prototype property fails",

test: function testcase() {
   // CHECK#1
x = Boolean.prototype;
Boolean.prototype = 1;
if (Boolean.prototype !== x) {
  $ERROR('#1: Boolean.prototype has the attribute ReadOnly');
}

 }
});

