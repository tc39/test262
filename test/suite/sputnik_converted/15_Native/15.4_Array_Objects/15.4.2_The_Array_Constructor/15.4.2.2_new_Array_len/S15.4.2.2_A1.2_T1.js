// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.4.2.2_A1.2_T1;
 * @section: 15.4.2.2, 15.2.4.2;
 * @assertion: The [[Class]] property of the newly constructed object is set to "Array";
 * @description: Checking use Object.prototype.toString;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.2.2_A1.2_T1",

path: "15_Native\15.4_Array_Objects\15.4.2_The_Array_Constructor\15.4.2.2_new_Array_len\S15.4.2.2_A1.2_T1.js",

assertion: "The [[Class]] property of the newly constructed object is set to \"Array\"",

description: "Checking use Object.prototype.toString",

test: function testcase() {
   //CHECK#1
var x = new Array(0); 
x.getClass = Object.prototype.toString;
if (x.getClass() !== "[object " + "Array" + "]") {
  $ERROR('#1: var x = new Array(0); x.getClass = Object.prototype.toString; x is Array object. Actual: ' + (x.getClass()));
}

 }
});

