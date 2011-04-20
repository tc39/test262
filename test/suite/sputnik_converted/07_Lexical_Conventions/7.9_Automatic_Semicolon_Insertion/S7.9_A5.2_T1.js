// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.9_A5.2_T1;
 * @section: 7.9, 12.4, 11.13.1;
 * @assertion: Check Prefix Increment Operator for automatic semicolon insertion;
 * @description: Try use Variable1 \n ++Variable2 construction;   
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.9_A5.2_T1",

path: "07_Lexical_Conventions\7.9_Automatic_Semicolon_Insertion\S7.9_A5.2_T1.js",

assertion: "Check Prefix Increment Operator for automatic semicolon insertion",

description: "Try use Variable1 \\n ++Variable2 construction",

test: function testcase() {
   //CHECK#1
var x = 0;
var y = 0;
x
++y
if (x !== 0) {
  $ERROR('#1: Check Prefix Increment Operator for automatic semicolon insertion');
} else {
  if (y !== 1) {
    $ERROR('#2: Check Prefix Increment Operator for automatic semicolon insertion');
  }
}
 

 }
});

