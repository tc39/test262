// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.4.2.2_A1.1_T3;
 * @section: 15.4.2.2, 15.2.4.6;
 * @assertion: The [[Prototype]] property of the newly constructed object 
 * is set to the original Array prototype object, the one that 
 * is the initial value of Array.prototype;
 * @description: Checking use isPrototypeOf;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.2.2_A1.1_T3",

path: "15_Native\15.4_Array_Objects\15.4.2_The_Array_Constructor\15.4.2.2_new_Array_len\S15.4.2.2_A1.1_T3.js",

assertion: "The [[Prototype]] property of the newly constructed object",

description: "Checking use isPrototypeOf",

test: function testcase() {
   //CHECK#1
if (Array.prototype.isPrototypeOf(new Array(0)) !== true) {
  $ERROR('#1: Array.prototype.isPrototypeOf(new Array(0)) === true. Actual: ' + (Array.prototype.isPrototypeOf(new Array(0))));
}


 }
});

