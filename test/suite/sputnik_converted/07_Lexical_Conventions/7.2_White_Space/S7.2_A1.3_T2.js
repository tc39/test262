// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.2_A1.3_T2;
 * @section: 7.2, 7.5;
 * @assertion: FORM FEED (U+000C) between any two tokens is allowed;
 * @description: Insert real FORM FEED between tokens of var x=1;  
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.2_A1.3_T2",

path: "7.2, 7.5",

description: "Insert real FORM FEED between tokens of var x=1",

test: function testcase() {
   //CHECK#1
varx=1;
if (x !== 1) {
  $ERROR('#1: varx=1; x === 1. Actual: ' + (x));
}

//CHECK#2
eval("var\fx=\f1");
if (x !== 1) {
  $ERROR('#2: var\\fx=\\f1; x === 1. Actual: ' + (x));
}


 }
});

