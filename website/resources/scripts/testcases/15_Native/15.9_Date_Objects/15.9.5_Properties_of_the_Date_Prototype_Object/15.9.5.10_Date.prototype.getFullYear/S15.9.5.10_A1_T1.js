// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.9.5.10_A1_T1;
 * @section: 15.9.5.10;
 * @assertion: The Date.prototype property "getFullYear" has { DontEnum } attributes;
 * @description: Checking absence of ReadOnly attribute;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.9.5.10_A1_T1",

path: "15.9.5.10",

description: "Checking absence of ReadOnly attribute",

test: function testcase() {
   x = Date.prototype.getFullYear;
if(x === 1)
  Date.prototype.getFullYear = 2;
else
  Date.prototype.getFullYear = 1;
if (Date.prototype.getFullYear === x) {
  $ERROR('#1: The Date.prototype.getFullYear has not the attribute ReadOnly');
}


 }
});

