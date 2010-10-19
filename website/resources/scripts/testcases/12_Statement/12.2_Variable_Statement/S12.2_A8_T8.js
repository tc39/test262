// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.2_A8_T8;
* @section: 12.2;
* @assertion: Only AssignmentExpression is admitted when variable is initialized;
* @description: Checking if execution of "var x in __arr" fails;
* @negative;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.2_A8_T8",

path: "12.2",

description: "Checking if execution of \"var x in __arr\" fails",

test: function testcase() {
  try {
     (function() {
         eval("__arr = [];\r\n\r\n//////////////////////////////////////////////////////////////////////////////\r\n//CHECK#1\r\nvar x in __arr;\r\n//\r\n//////////////////////////////////////////////////////////////////////////////\r\n\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

