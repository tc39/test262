// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.2_A3.2_T2;
 * @section: 7.2, 7.4;
 * @assertion: Single line comment can contain VERTICAL TAB (U+000B);
 * @description: Use real VERTICAL TAB;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.2_A3.2_T2",

path: "07_Lexical_Conventions\7.2_White_Space\S7.2_A3.2_T2.js",

assertion: "Single line comment can contain VERTICAL TAB (U+000B)",

description: "Use real VERTICAL TAB",

test: function testcase() {
   //CHECK#1
var x = 0;
//singlelinecommentx = 1;
if (x !== 0) {
  $ERROR('#1: var x = 0; //singlelinecommentx = 1; x === 0. Actual: ' + (x));
}

 }
});

