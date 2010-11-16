// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.2_A1.4_T1;
 * @section: 7.2, 7.5;
 * @assertion: SPACE (U+0020) between any two tokens is allowed;
 * @description: Insert SPACE(\u0020) between tokens of var x=1;  
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.2_A1.4_T1",

path: "7.2, 7.5",

description: "Insert SPACE(\\u0020) between tokens of var x=1",

test: function testcase() {
   // CHECK#1
eval("\u0020var\u0020x\u0020=\u00201\u0020");
if (x !== 1) {
  $ERROR('#1: eval("\\u0020var\\u0020x\\u0020=\\u00201\\u0020"); x === 1;');
}

//CHECK#2
eval("\u0020" + "var" + "\u0020" + "x" + "\u0020" + "=" + "\u0020" + "1" + "\u0020");
if (x !== 1) {
  $ERROR('#2: eval("\\u0020" + "var" + "\\u0020" + "x" + "\\u0020" + "=" + "\\u0020" + "1" + "\\u0020"); x === 1. Actual: ' + (x));
}

 }
});

