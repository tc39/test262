// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.10.2.11_A1_T3;
 * @section: 15.10.2.11;
 * @assertion: DecimalEscape :: DecimalIntegerLiteral [lookahead not in DecimalDigit];
 * @description: It is an error if n is greater than the total number of left capturing parentheses in the entire regular expression;
 * @negative;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.2.11_A1_T3",

path: "15.10.2.11",

description: "It is an error if n is greater than the total number of left capturing parentheses in the entire regular expression",

test: function testcase() {
  try {
     (function() {
         eval("/(?:A)\\2/.exec(\"AA\");\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

