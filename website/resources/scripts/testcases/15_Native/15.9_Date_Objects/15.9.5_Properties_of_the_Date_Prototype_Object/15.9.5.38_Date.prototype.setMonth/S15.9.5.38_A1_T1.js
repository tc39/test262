// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.9.5.38_A1_T1;
 * @section: 15.9.5.38;
 * @assertion: The Date.prototype property "setMonth" has { DontEnum } attributes;
 * @description: Checking absence of ReadOnly attribute;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.9.5.38_A1_T1",

path: "15.9.5.38",

description: "Checking absence of ReadOnly attribute",

test: function testcase() {
   x = Date.prototype.setMonth;
if(x === 1)
  Date.prototype.setMonth = 2;
else
  Date.prototype.setMonth = 1;
if (Date.prototype.setMonth === x) {
  $ERROR('#1: The Date.prototype.setMonth has not the attribute ReadOnly');
}


 }
});

