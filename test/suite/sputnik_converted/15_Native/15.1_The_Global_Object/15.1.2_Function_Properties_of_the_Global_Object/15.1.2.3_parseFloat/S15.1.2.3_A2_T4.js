// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.1.2.3_A2_T4;
 * @section: 15.1.2.3;
 * @assertion: Operator remove leading StrWhiteSpaceChar;
 * @description: StrWhiteSpaceChar :: FF (U+000C);  
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.2.3_A2_T4",

path: "15_Native\15.1_The_Global_Object\15.1.2_Function_Properties_of_the_Global_Object\15.1.2.3_parseFloat\S15.1.2.3_A2_T4.js",

assertion: "Operator remove leading StrWhiteSpaceChar",

description: "StrWhiteSpaceChar :: FF (U+000C)",

test: function testcase() {
   //CHECK#1
if (parseFloat("\u000C1.1") !== parseFloat("1.1")) {
  $ERROR('#1: parseFloat("\\u000C1.1") === parseFloat("1.1"). Actual: ' + (parseFloat("\u000C1.1")));
}

//CHECK#2
if (parseFloat("\u000C\u000C-1.1") !== parseFloat("-1.1")) {
  $ERROR('#2: parseFloat("\\u000C\\u000C-1.1") === parseFloat("-1.1"). Actual: ' + (parseFloat("\u000C\u000C-1.1")));
}

//CHECK#3
if (isNaN(parseFloat("\u000C")) !== true) {
  $ERROR('#3: parseFloat("\\u000C") === Not-a-Number. Actual: ' + (parseFloat("\u000C")));
}

 }
});

