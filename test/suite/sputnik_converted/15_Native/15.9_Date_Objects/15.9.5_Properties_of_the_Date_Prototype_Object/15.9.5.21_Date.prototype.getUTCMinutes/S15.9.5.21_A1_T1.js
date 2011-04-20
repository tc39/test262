// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.9.5.21_A1_T1;
 * @section: 15.9.5.21;
 * @assertion: The Date.prototype property "getUTCMinutes" has { DontEnum } attributes;
 * @description: Checking absence of ReadOnly attribute;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.9.5.21_A1_T1",

path: "15_Native\15.9_Date_Objects\15.9.5_Properties_of_the_Date_Prototype_Object\15.9.5.21_Date.prototype.getUTCMinutes\S15.9.5.21_A1_T1.js",

assertion: "The Date.prototype property \"getUTCMinutes\" has { DontEnum } attributes",

description: "Checking absence of ReadOnly attribute",

test: function testcase() {
   x = Date.prototype.getUTCMinutes;
if(x === 1)
  Date.prototype.getUTCMinutes = 2;
else
  Date.prototype.getUTCMinutes = 1;
if (Date.prototype.getUTCMinutes === x) {
  $ERROR('#1: The Date.prototype.getUTCMinutes has not the attribute ReadOnly');
}


 }
});

