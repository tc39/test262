// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.9.5.42_A1_T1;
 * @section: 15.9.5.42;
 * @assertion: The Date.prototype property "toUTCString" has { DontEnum } attributes;
 * @description: Checking absence of ReadOnly attribute;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.9.5.42_A1_T1",

path: "15.9.5.42",

description: "Checking absence of ReadOnly attribute",

test: function testcase() {
   x = Date.prototype.toUTCString;
if(x === 1)
  Date.prototype.toUTCString = 2;
else
  Date.prototype.toUTCString = 1;
if (Date.prototype.toUTCString === x) {
  $ERROR('#1: The Date.prototype.toUTCString has not the attribute ReadOnly');
}


 }
});

