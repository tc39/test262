// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.4.3_A1.1_T3;
 * @section: 15.4.3, 15.2.4.6;
 * @assertion: The value of the internal [[Prototype]] property of 
 * the Array constructor is the Function prototype object;
 * @description: Checking use isPrototypeOf;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.3_A1.1_T3",

path: "15_Native\15.4_Array_Objects\15.4.3_Properties_of_the_Array_Constructor\S15.4.3_A1.1_T3.js",

assertion: "The value of the internal [[Prototype]] property of",

description: "Checking use isPrototypeOf",

test: function testcase() {
   //CHECK#1
if (Function.prototype.isPrototypeOf(Array) !== true) {
  $ERROR('#1: Function.prototype.isPrototypeOf(Array) === true. Actual: ' + (Function.prototype.isPrototypeOf(Array)));
}

 }
});

