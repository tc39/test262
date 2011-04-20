// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.3.3_A2_T1;
* @section: 15.3.3, 15.3.4;
* @assertion: The value of the internal [[Prototype]] property of the Function constructor 
* is the Function prototype object;
* @description: Checking prototype of Function;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.3.3_A2_T1",

path: "15_Native\15.3_Function_Objects\15.3.3_Properties_of_the_Function_Constructor\S15.3.3_A2_T1.js",

assertion: "The value of the internal [[Prototype]] property of the Function constructor",

description: "Checking prototype of Function",

test: function testcase() {
   // CHECK#
if (!(Function.prototype.isPrototypeOf(Function))) {
  $ERROR('#1: the value of the internal [[Prototype]] property of the Function constructor is the Function prototype object.');
}

 }
});

