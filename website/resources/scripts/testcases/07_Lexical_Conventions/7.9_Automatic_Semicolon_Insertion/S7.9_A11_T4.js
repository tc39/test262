// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.9_A11_T4;
 * @section: 7.9, 12.5;
 * @assertion: Check If Statement for automatic semicolon insertion;
 * @description: Checking if execution of "if (false) x = 1 else x = -1" fails;
 * @negative
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.9_A11_T4",

path: "7.9, 12.5",

description: "Checking if execution of \"if (false) x = 1 else x = -1\" fails",

test: function testcase() {
  try {
     (function() {
         eval("//CHECK#1\r\nx = 0;\r\nif (false) x = 1 else x = -1\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

