// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.10.2.11_A1_T9;
 * @section: 15.10.2.11, 15.10.2.9;
 * @assertion: DecimalEscape :: DecimalIntegerLiteral [lookahead not in DecimalDigit];
 * @description: DecimalIntegerLiteral is not 0;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.2.11_A1_T9",

path: "15_Native\15.10_RegExp_Objects\15.10.2_Pattern_Semantics\15.10.2.11_DecimalEscape\S15.10.2.11_A1_T9.js",

assertion: "DecimalEscape :: DecimalIntegerLiteral [lookahead not in DecimalDigit]",

description: "DecimalIntegerLiteral is not 0",

test: function testcase() {
   var arr = /((((((((((A))))))))))\10\9\8\7\6\5\4\3\2\1/.exec("AAAAAAAAAAA");

//CHECK#1
if ((arr === null) || (arr[0] !== "AAAAAAAAAAA")) {
  $ERROR('#1: var arr = /((((((((((A))))))))))\\10\\9\\8\\7\\6\\5\\4\\3\\2\\1/.exec("AAAAAAAAAAA"); arr[0] === "AAAAAAAAAAA". Actual. ' + (arr && arr[0]));
}

for (i = 1; i <= 10; i++) {
  //CHECK#i
  if ((arr === null) || (arr[i] !== "A")) {
    $ERROR('#2: var arr = /((((((((((A))))))))))\\10\\9\\8\\7\\6\\5\\4\\3\\2\\1/.exec("AAAAAAAAAAA"); arr[' + i + '] === "A". Actual. ' + (arr && arr[i]));
  }
}  

 }
});

