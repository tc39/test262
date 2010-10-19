// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.9.5.13_A3_T1;
 * @section: 15.9.5.13;
 * @assertion: The Date.prototype.getUTCMonth property "length" has { ReadOnly, DontDelete, DontEnum } attributes;
 * @description: Checking ReadOnly attribute;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.9.5.13_A3_T1",

path: "15.9.5.13",

description: "Checking ReadOnly attribute",

test: function testcase() {
   x = Date.prototype.getUTCMonth.length;
Date.prototype.getUTCMonth.length = 1;
if (Date.prototype.getUTCMonth.length !== x) {
  $ERROR('#1: The Date.prototype.getUTCMonth.length has the attribute ReadOnly');
}


 }
});

