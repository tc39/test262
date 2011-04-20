// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.9.4_A4;
* @section: 15.9.4;
* @assertion: The value of the internal [[Prototype]] property of the Date 
* constructor is the Function prototype object;
* @description: Checking Function.prototype.isPrototypeOf(Date);
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.9.4_A4",

path: "15_Native\15.9_Date_Objects\15.9.4_Properties_of_the_Date_Constructor\S15.9.4_A4.js",

assertion: "The value of the internal [[Prototype]] property of the Date",

description: "Checking Function.prototype.isPrototypeOf(Date)",

test: function testcase() {
   //CHECK#1
if (!(Function.prototype.isPrototypeOf(Date))) {
  $ERROR('#1: the value of the internal [[Prototype]] property of the Date constructor is the Function prototype object.');
}

 }
});

