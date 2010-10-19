// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.9.5.13_A1_T1;
 * @section: 15.9.5.13;
 * @assertion: The Date.prototype property "getUTCMonth" has { DontEnum } attributes;
 * @description: Checking absence of ReadOnly attribute;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.9.5.13_A1_T1",

path: "15.9.5.13",

description: "Checking absence of ReadOnly attribute",

test: function testcase() {
   x = Date.prototype.getUTCMonth;
if(x === 1)
  Date.prototype.getUTCMonth = 2;
else
  Date.prototype.getUTCMonth = 1;
if (Date.prototype.getUTCMonth === x) {
  $ERROR('#1: The Date.prototype.getUTCMonth has not the attribute ReadOnly');
}


 }
});

