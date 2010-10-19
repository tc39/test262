// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.9_A6.3_T3;
 * @section: 7.9, 12.6.3;
 * @assertion: Check For Statement for automatic semicolon insertion.
 * If automatic insertion semicolon would become one of the two semicolons in the header of a For Statement.
 * Don`t use semicolons;
 * @description: For header is (\n \n \n);
 * @negative 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.9_A6.3_T3",

path: "7.9, 12.6.3",

description: "For header is (\\n \\n \\n)",

test: function testcase() {
  try {
     (function() {
         eval("//CHECK#1\r\nfor(\r\n    \r\n    \r\n) {\r\n  break;\r\n}\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

