// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.3.3_A2_T2;
* @section: 15.3.3, 15.3.4;
* @assertion: The value of the internal [[Prototype]] property of the Function constructor 
* is the Function prototype object;
* @description: Add new property to Function.prototype and check it;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.3.3_A2_T2",

path: "15_Native\15.3_Function_Objects\15.3.3_Properties_of_the_Function_Constructor\S15.3.3_A2_T2.js",

assertion: "The value of the internal [[Prototype]] property of the Function constructor",

description: "Add new property to Function.prototype and check it",

test: function testcase() {
   Function.prototype.indicator = 1;

//CHECK#
if (Function.indicator != 1) {
  $ERROR('#1: the value of the internal [[Prototype]] property of the Function constructor is the Function prototype object.');
}

 }
});

