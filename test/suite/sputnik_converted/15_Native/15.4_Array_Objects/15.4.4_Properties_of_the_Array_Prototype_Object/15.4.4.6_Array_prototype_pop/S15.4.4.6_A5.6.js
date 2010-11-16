// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.4.4.6_A5.6;
* @section: 15.4.4.6;
* @assertion: The pop property of Array has not prototype property;
* @description: Checking Array.prototype.pop.prototype;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.4.6_A5.6",

path: "15.4.4.6",

description: "Checking Array.prototype.pop.prototype",

test: function testcase() {
   //CHECK#1
if (Array.prototype.pop.prototype !== undefined) {
  $ERROR('#1: Array.prototype.pop.prototype === undefined. Actual: ' + (Array.prototype.pop.prototype));
}

 }
});

