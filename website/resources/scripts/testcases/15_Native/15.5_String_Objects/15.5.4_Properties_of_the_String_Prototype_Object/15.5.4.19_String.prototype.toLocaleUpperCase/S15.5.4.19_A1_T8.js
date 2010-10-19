// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.19_A1_T8;
* @section: 15.5.4.19;
* @assertion: String.prototype.toLocaleUpperCase();
* @description: Call toLocaleUpperCase() function of Infinity;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.19_A1_T8",

path: "15.5.4.19",

description: "Call toLocaleUpperCase() function of Infinity",

test: function testcase() {
   Number.prototype.toLocaleUpperCase = String.prototype.toLocaleUpperCase;

if (Infinity.toLocaleUpperCase()!== "INFINITY") {
  $ERROR('#1: Number.prototype.toLocaleUpperCase = String.prototype.toLocaleUpperCase; Infinity.toLocaleUpperCase()=== "INFINITY". Actual: '+Infinity.toLocaleUpperCase());
}

 }
});

