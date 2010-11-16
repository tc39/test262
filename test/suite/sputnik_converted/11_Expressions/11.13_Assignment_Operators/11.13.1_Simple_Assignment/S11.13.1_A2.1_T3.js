// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.13.1_A2.1_T3;
 * @section: 11.13.1, 16;
 * @assertion: Operator x = y uses GetValue and PutValue;
 * @description: If Type(LeftHandSideExpression) is not Reference, throw ReferenceError (or SyntaxError);
*  @negative
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.13.1_A2.1_T3",

path: "11.13.1, 16",

description: "If Type(LeftHandSideExpression) is not Reference, throw ReferenceError (or SyntaxError)",

test: function testcase() {
  try {
     (function() {
         eval("//CHECK#1\r\ntry {\r\n  1 = 1;\r\n  $ERROR(\'#1.1: 1 = 1 throw ReferenceError (or SyntaxError). Actual: \' + (1 = 1));  \r\n}\r\ncatch (e) {\r\n  if ((e instanceof ReferenceError) !== true) {\r\n    $ERROR(\'#1.2: 1 = 1 throw ReferenceError (or SyntaxError). Actual: \' + (e));  \r\n  } else {\r\n    1 = 1;\r\n  }\r\n}\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

