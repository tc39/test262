// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.9_A5.5_T1;
 * @section: 7.9, 12.4, 11.2.5;
 * @assertion: Check Function Expression for automatic semicolon insertion;
 * @description: Try use 1 + function_name\n(2 + 3) construction; 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.9_A5.5_T1",

path: "7.9, 12.4, 11.2.5",

description: "Try use 1 + function_name\\n(2 + 3) construction",

test: function testcase() {
   //CHECK#1
function f(t) {
  return t;
}
var x = 1 + f
(2 + 3)
if (x !== 6) {
  $ERROR('#1: Check Function Expression for automatic semicolon insertion');
} 

 }
});

