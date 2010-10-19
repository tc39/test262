// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.9_A9_T7;
 * @section: 7.9, 12.6.1;
 * @assertion: Check Do-While Statement for automatic semicolon insertion;
 * @description: Execute do \n\n while(false);
 * @negative
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.9_A9_T7",

path: "7.9, 12.6.1",

description: "Execute do \\n\\n while(false)",

test: function testcase() {
  try {
     (function() {
         eval("//CHECK#1\r\ndo\r\n  \r\nwhile (false) \r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

