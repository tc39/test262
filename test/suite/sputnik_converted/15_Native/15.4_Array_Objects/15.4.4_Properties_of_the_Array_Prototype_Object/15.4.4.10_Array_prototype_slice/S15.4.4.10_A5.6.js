// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.4.4.10_A5.6;
* @section: 15.4.4.10;
* @assertion: The slice property of Array has not prototype property;
* @description: Checking Array.prototype.slice.prototype;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.4.10_A5.6",

path: "15_Native\15.4_Array_Objects\15.4.4_Properties_of_the_Array_Prototype_Object\15.4.4.10_Array_prototype_slice\S15.4.4.10_A5.6.js",

assertion: "The slice property of Array has not prototype property",

description: "Checking Array.prototype.slice.prototype",

test: function testcase() {
   //CHECK#1
if (Array.prototype.slice.prototype !== undefined) {
  $ERROR('#1: Array.prototype.slice.prototype === undefined. Actual: ' + (Array.prototype.slice.prototype));
}

 }
});

