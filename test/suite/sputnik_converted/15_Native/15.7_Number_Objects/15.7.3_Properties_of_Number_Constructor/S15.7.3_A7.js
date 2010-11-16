// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.7.3_A7;
* @section: 15.7.3;
* @assertion: The value of the internal [[Prototype]] property of the Number 
* constructor is the Function prototype object;
* @description: Checking Function.prototype.isPrototypeOf(Number);
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.7.3_A7",

path: "15.7.3",

description: "Checking Function.prototype.isPrototypeOf(Number)",

test: function testcase() {
   //CHECK#1
if (!(Function.prototype.isPrototypeOf(Number))) {
  $ERROR('#1: the value of the internal [[Prototype]] property of the Number constructor is the Function prototype object.');
}

 }
});

