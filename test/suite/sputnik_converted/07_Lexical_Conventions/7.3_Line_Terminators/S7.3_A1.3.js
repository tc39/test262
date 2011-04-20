// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.3_A1.3;
 * @section: 7.3;
 * @assertion: LINE SEPARATOR (U+2028) may occur between any two tokens;
 * @description: Insert LINE SEPARATOR (\u2028) between tokens of var x=1;  
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.3_A1.3",

path: "07_Lexical_Conventions\7.3_Line_Terminators\S7.3_A1.3.js",

assertion: "LINE SEPARATOR (U+2028) may occur between any two tokens",

description: "Insert LINE SEPARATOR (\\u2028) between tokens of var x=1",

test: function testcase() {
   // CHECK#1
eval("\u2028var\u2028x\u2028=\u20281\u2028");
if (x !== 1) {
  $ERROR('#1: eval("\\u2028var\\u2028x\\u2028=\\u20281\\u2028"); x === 1. Actual: ' + (x));
}

//CHECK#2
eval("\u2028" + "var" + "\u2028" + "x" + "\u2028" + "=" + "\u2028" + "1" + "\u2028");
if (x !== 1) {
  $ERROR('#2: eval("\\u2028" + "var" + "\\u2028" + "x" + "\\u2028" + "=" + "\\u2028" + "1" + "\\u2028"); x === 1. Actual: ' + (x));
}


 }
});

