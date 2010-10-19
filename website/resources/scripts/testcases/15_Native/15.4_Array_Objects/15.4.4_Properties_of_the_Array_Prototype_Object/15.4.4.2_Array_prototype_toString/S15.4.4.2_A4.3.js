// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.4.4.2_A4.3;
* @section: 15.4.4.2;
* @assertion: The length property of toString has the attribute ReadOnly;
* @description: Checking if varying the length property fails;
* @strict_mode_negative
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.4.2_A4.3",

path: "15.4.4.2",

description: "Checking if varying the length property fails",

test: function testcase() {
   //CHECK#1
var x = Array.prototype.toString.length;
Array.prototype.toString.length = Infinity;
if (Array.prototype.toString.length !== x) {
  $ERROR('#1: x = Array.prototype.toString.length; Array.prototype.toString.length = Infinity; Array.prototype.toString.length === x. Actual: ' + (Array.prototype.toString.length));
}


 }
});

