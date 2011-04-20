// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.1.2.2_A2_T7;
 * @section: 15.1.2.2;
 * @assertion: Operator remove leading StrWhiteSpaceChar;
 * @description: StrWhiteSpaceChar :: LF (U+000A);  
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.2.2_A2_T7",

path: "15_Native\15.1_The_Global_Object\15.1.2_Function_Properties_of_the_Global_Object\15.1.2.2_parseInt\S15.1.2.2_A2_T7.js",

assertion: "Operator remove leading StrWhiteSpaceChar",

description: "StrWhiteSpaceChar :: LF (U+000A)",

test: function testcase() {
   //CHECK#1
if (parseInt("\u000A1") !== parseInt("1")) {
  $ERROR('#1: parseInt("\\u000A1") === parseInt("1"). Actual: ' + (parseInt("\u000A1")));
}

//CHECK#2
if (parseInt("\u000A\u000A-1") !== parseInt("-1")) {
  $ERROR('#2: parseInt("\\u000A\\u000A-1") === parseInt("-1"). Actual: ' + (parseInt("\u000A\u000A-1")));
}

//CHECK#3
if (isNaN(parseInt("\u000A")) !== true) {
  $ERROR('#3: parseInt("\\u000A") === Not-a-Number. Actual: ' + (parseInt("\u000A")));
}

 }
});

