// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.9.5.37_A1_T1;
 * @section: 15.9.5.37;
 * @assertion: The Date.prototype property "setUTCDate" has { DontEnum } attributes;
 * @description: Checking absence of ReadOnly attribute;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.9.5.37_A1_T1",

path: "15.9.5.37",

description: "Checking absence of ReadOnly attribute",

test: function testcase() {
   x = Date.prototype.setUTCDate;
if(x === 1)
  Date.prototype.setUTCDate = 2;
else
  Date.prototype.setUTCDate = 1;
if (Date.prototype.setUTCDate === x) {
  $ERROR('#1: The Date.prototype.setUTCDate has not the attribute ReadOnly');
}


 }
});

