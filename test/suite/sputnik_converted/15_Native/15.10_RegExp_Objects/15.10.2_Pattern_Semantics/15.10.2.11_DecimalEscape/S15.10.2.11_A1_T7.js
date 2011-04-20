// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.10.2.11_A1_T7;
 * @section: 15.10.2.11, 15.10.2.9;
 * @assertion: DecimalEscape :: DecimalIntegerLiteral [lookahead not in DecimalDigit];
 * @description: DecimalIntegerLiteral is not 0;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.2.11_A1_T7",

path: "15_Native\15.10_RegExp_Objects\15.10.2_Pattern_Semantics\15.10.2.11_DecimalEscape\S15.10.2.11_A1_T7.js",

assertion: "DecimalEscape :: DecimalIntegerLiteral [lookahead not in DecimalDigit]",

description: "DecimalIntegerLiteral is not 0",

test: function testcase() {
   var arr = /\1(A)(B)\2/.exec("ABB");

//CHECK#1
if ((arr === null) || (arr[0] !== "ABB")) {
  $ERROR('#1: var arr = /\\1(A)(B)\\2/.exec("ABB"); arr[0] === "ABB". Actual. ' + (arr && arr[0]));
}

//CHECK#2
if ((arr === null) || (arr[1] !== "A")) {
  $ERROR('#2: var arr = /\\1(A)(B)\\2/.exec("ABB"); arr[1] === "A". Actual. ' + (arr && arr[1]));
}

//CHECK#3
if ((arr === null) || (arr[2] !== "B")) {
  $ERROR('#3: var arr = /\\1(A)(B)\\2/.exec("ABB"); arr[2] === "B". Actual. ' + (arr && arr[2]));
}      

 }
});

