// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.9_A1_T10;
* @section: 12.9;
* @assertion: Appearing of "return" without a function body leads to syntax error;
* @description: Checking if execution of "return (0)" with no function fails;
* @negative;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.9_A1_T10",

path: "12.9",

description: "Checking if execution of \"return (0)\" with no function fails",

test: function testcase() {
  try {
     (function() {
         eval("//////////////////////////////////////////////////////////////////////////////\r\n//CHECK#1\r\nreturn (0);\r\n//\r\n//////////////////////////////////////////////////////////////////////////////\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

