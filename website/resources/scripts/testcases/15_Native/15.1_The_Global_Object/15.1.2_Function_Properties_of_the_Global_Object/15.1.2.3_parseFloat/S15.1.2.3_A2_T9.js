// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.1.2.3_A2_T9;
 * @section: 15.1.2.3;
 * @assertion: Operator remove leading StrWhiteSpaceChar;
 * @description: StrWhiteSpaceChar :: PS (U+2029);  
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.2.3_A2_T9",

path: "15.1.2.3",

description: "StrWhiteSpaceChar :: PS (U+2029)",

test: function testcase() {
   //CHECK#1
if (parseFloat("\u20291.1") !== parseFloat("1.1")) {
  $ERROR('#1: parseFloat("\\u20291.1") === parseFloat("1.1"). Actual: ' + (parseFloat("\u20291.1")));
}

//CHECK#2
if (parseFloat("\u2029\u2029-1.1") !== parseFloat("-1.1")) {
  $ERROR('#2: parseFloat("\\u2029\\u2029-1.1") === parseFloat("-1.1"). Actual: ' + (parseFloat("\u2029\u2029-1.1")));
}

//CHECK#3
if (isNaN(parseFloat("\u2029")) !== true) {
  $ERROR('#3: parseFloat("\\u2029") === Not-a-Number. Actual: ' + (parseFloat("\u2029")));
}

 }
});

