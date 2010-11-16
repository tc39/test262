// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.13.2_A2.2_T2;
 * @section: 11.13.2, 16;
 * @assertion: Operator uses PutValue; 
 * @description: If Type(LeftHandSideExpression) is not Reference, throw ReferenceError (or SyntaxError). Check operator is "x /= y";
*  @negative
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.13.2_A2.2_T2",

path: "11.13.2, 16",

description: "If Type(LeftHandSideExpression) is not Reference, throw ReferenceError (or SyntaxError). Check operator is \"x /= y\"",

test: function testcase() {
  try {
     (function() {
         eval("//CHECK#1\r\ntry {\r\n  var z = (1 /= 1);\r\n  $ERROR(\'#1.1: 1 /= 1 throw ReferenceError (or SyntaxError). Actual: \' + (z));  \r\n}\r\ncatch (e) {\r\n  if ((e instanceof ReferenceError) !== true) {\r\n    $ERROR(\'#1.2: 1 /= 1 throw ReferenceError (or SyntaxError). Actual: \' + (e));  \r\n  } else {\r\n    var z = (1 /= 1);\r\n  }\r\n}\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

