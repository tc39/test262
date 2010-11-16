// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.4.4.1_A1_T1;
 * @section: 15.4.4.1;
 * @assertion: The initial value of Array.prototype.constructor is 
 * the built-in Array constructor;
 * @description: Array.prototype.constructor === Array;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.4.1_A1_T1",

path: "15.4.4.1",

description: "Array.prototype.constructor === Array",

test: function testcase() {
   //CHECK#1
if (Array.prototype.constructor !== Array) {
  $ERROR('#1: Array.prototype.constructor === Array. Actual: ' + (Array.prototype.constructor));
}   

 }
});

