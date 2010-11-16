// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.6.3_A4_T1;
* @section: 12.6.3;
* @assertion: "in"-expression is not allowed as a ExpressionNoIn in "for (ExpressionNoIn; FirstExpression; SecondExpression) Statement" IterationStatement;
* @description: Checking if execution of "for (a in arr;1;){}" fails;
* @negative;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.6.3_A4_T1",

path: "12.6.3",

description: "Checking if execution of \"for (a in arr;1;){}\" fails",

test: function testcase() {
  try {
     (function() {
         eval("arr = [1,2,3,4,5];\r\n\r\n//////////////////////////////////////////////////////////////////////////////\r\n//CHECK#1\r\nfor (a in arr;1;){\r\n    break;\r\n}\r\n//\r\n//////////////////////////////////////////////////////////////////////////////\r\n\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

