// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.9.5.3_A3_T1;
 * @section: 15.9.5.3;
 * @assertion: The Date.prototype.toDateString property "length" has { ReadOnly, DontDelete, DontEnum } attributes;
 * @description: Checking ReadOnly attribute;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.9.5.3_A3_T1",

path: "15_Native\15.9_Date_Objects\15.9.5_Properties_of_the_Date_Prototype_Object\15.9.5.3_Date.prototype.toDateString\S15.9.5.3_A3_T1.js",

assertion: "The Date.prototype.toDateString property \"length\" has { ReadOnly, DontDelete, DontEnum } attributes",

description: "Checking ReadOnly attribute",

test: function testcase() {
   x = Date.prototype.toDateString.length;
Date.prototype.toDateString.length = 1;
if (Date.prototype.toDateString.length !== x) {
  $ERROR('#1: The Date.prototype.toDateString.length has the attribute ReadOnly');
}


 }
});

