// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.4.4_A1.1_T2;
 * @section: 15.4.4, 11.4.1;
 * @assertion: The value of the internal [[Prototype]] property of 
 * the Array prototype object is the Object prototype object;
 * @description: delete Array.prototype.toString;
 * @strict_mode_negative
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.4_A1.1_T2",

path: "15.4.4, 11.4.1",

description: "delete Array.prototype.toString",

test: function testcase() {
   //CHECK#1
delete Array.prototype.toString;
if (Array.prototype.toString() !== "[object " + "Array" + "]") {
  $ERROR('#1: delete Array.prototype.toString; var Array.prototype = Object(); Array.prototype.toString() === "[object " + "Array" + "]". Actual: ' + (Array.prototype.toString()));
}

 }
});

