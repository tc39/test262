// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.4.3_A1.1_T2;
 * @section: 15.4.3, 15.2.4.2;
 * @assertion: The value of the internal [[Prototype]] property of 
 * the Array constructor is the Function prototype object;
 * @description: Function.prototype.toString = Object.prototype.toString;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.3_A1.1_T2",

path: "15.4.3, 15.2.4.2",

description: "Function.prototype.toString = Object.prototype.toString",

test: function testcase() {
   //CHECK#1
Function.prototype.toString = Object.prototype.toString;
if (Array.toString() !== "[object " + "Function" + "]") {
  $ERROR('#1: Function.prototype.toString = Object.prototype.toString; Array.toString() === "[object " + "Function" + "]". Actual: ' + (Array.toString()));
}

 }
});

