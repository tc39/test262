// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.10.2.11_A1_T2;
 * @section: 15.10.2.11;
 * @assertion: DecimalEscape :: DecimalIntegerLiteral [lookahead not in DecimalDigit];
 * @description: It is an error if n is greater than the total number of left capturing parentheses in the entire regular expression;
 * @negative;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.2.11_A1_T2",

path: "15.10.2.11",

description: "It is an error if n is greater than the total number of left capturing parentheses in the entire regular expression",

test: function testcase() {
  try {
     (function() {
         eval("/\\1/.exec(\"\");\r\n/\\2/.exec(\"\");\r\n/\\3/.exec(\"\");\r\n/\\4/.exec(\"\");\r\n/\\5/.exec(\"\");\r\n/\\6/.exec(\"\");\r\n/\\7/.exec(\"\");\r\n/\\8/.exec(\"\");\r\n/\\9/.exec(\"\");\r\n/\\10/.exec(\"\");\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

