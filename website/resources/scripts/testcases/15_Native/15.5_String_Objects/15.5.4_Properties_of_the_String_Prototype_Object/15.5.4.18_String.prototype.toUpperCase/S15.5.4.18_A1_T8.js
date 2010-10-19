// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.18_A1_T8;
* @section: 15.5.4.18;
* @assertion: String.prototype.toUpperCase();
* @description: Call toUpperCase() function of Infinity;
* 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.18_A1_T8",

path: "15.5.4.18",

description: "Call toUpperCase() function of Infinity",

test: function testcase() {
   Number.prototype.toUpperCase = String.prototype.toUpperCase;

if (Infinity.toUpperCase()!== "INFINITY") {
  $ERROR('#1: Number.prototype.toUpperCase = String.prototype.toUpperCase; Infinity.toUpperCase()=== "INFINITY". Actual: '+Infinity.toUpperCase());
}

 }
});

