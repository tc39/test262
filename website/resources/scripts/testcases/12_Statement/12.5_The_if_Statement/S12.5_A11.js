// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.5_A11;
* @section: 12.5;
* @assertion: {} within the "if" expression is not allowed;
* @description: Checking if execution of "if({1})" fails;
* @negative;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.5_A11",

path: "12.5",

description: "Checking if execution of \"if({1})\" fails",

test: function testcase() {
  try {
     (function() {
         eval("//////////////////////////////////////////////////////////////////////////////\r\n//CHECK#\r\nif({1})\r\n  {\r\n    ;\r\n  }else\r\n  {\r\n    ;\r\n  }\r\n//\r\n//////////////////////////////////////////////////////////////////////////////\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

