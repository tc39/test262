// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.4.4_A1.2_T1;
 * @section: 15.4.4, 15.2.4.2;
 * @assertion: The [[Class]] property of the Array prototype object is set to "Array";
 * @description: Checking use Object.prototype.toString;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.4_A1.2_T1",

path: "15_Native\15.4_Array_Objects\15.4.4_Properties_of_the_Array_Prototype_Object\S15.4.4_A1.2_T1.js",

assertion: "The [[Class]] property of the Array prototype object is set to \"Array\"",

description: "Checking use Object.prototype.toString",

test: function testcase() {
   //CHECK#1
Array.prototype.getClass = Object.prototype.toString;
if (Array.prototype.getClass() !== "[object " + "Array" + "]") {
  $ERROR('#1: Array.prototype.getClass = Object.prototype.toString; Array.prototype is Array object. Actual: ' + (Array.prototype.getClass()));
}

 }
});

