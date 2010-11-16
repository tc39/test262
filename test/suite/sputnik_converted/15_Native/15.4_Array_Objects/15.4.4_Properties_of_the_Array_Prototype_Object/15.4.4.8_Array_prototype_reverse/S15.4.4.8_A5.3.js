// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.4.4.8_A5.3;
* @section: 15.4.4.8; 
* @assertion: The length property of reverse has the attribute ReadOnly;
* @description: Checking if varying the length property fails;
* @strict_mode_negative
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.4.8_A5.3",

path: "15.4.4.8",

description: "Checking if varying the length property fails",

test: function testcase() {
   //CHECK#1
var x = Array.prototype.reverse.length;
Array.prototype.reverse.length = Infinity;
if (Array.prototype.reverse.length !== x) {
  $ERROR('#1: x = Array.prototype.reverse.length; Array.prototype.reverse.length = Infinity; Array.prototype.reverse.length === x. Actual: ' + (Array.prototype.reverse.length));
}


 }
});

