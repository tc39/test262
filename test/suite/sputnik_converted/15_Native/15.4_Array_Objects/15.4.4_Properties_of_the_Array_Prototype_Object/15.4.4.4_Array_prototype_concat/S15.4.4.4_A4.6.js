// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.4.4.4_A4.6;
* @section: 15.4.4.4;
* @assertion: The concat property of Array has not prototype property;
* @description: Checking Array.prototype.concat.prototype;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.4.4_A4.6",

path: "15_Native\15.4_Array_Objects\15.4.4_Properties_of_the_Array_Prototype_Object\15.4.4.4_Array_prototype_concat\S15.4.4.4_A4.6.js",

assertion: "The concat property of Array has not prototype property",

description: "Checking Array.prototype.concat.prototype",

test: function testcase() {
   //CHECK#1
if (Array.prototype.concat.prototype !== undefined) {
  $ERROR('#1: Array.prototype.concat.prototype === undefined. Actual: ' + (Array.prototype.concat.prototype));
}

 }
});

