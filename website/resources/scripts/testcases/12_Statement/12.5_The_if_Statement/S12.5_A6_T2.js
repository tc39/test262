// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.5_A6_T2;
* @section: 12.5;
* @assertion: In the If statement expression must be enclosed in braces;
* @description: Checking if execution of "if false" fails;
* @negative;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.5_A6_T2",

path: "12.5",

description: "Checking if execution of \"if false\" fails",

test: function testcase() {
  try {
     (function() {
         eval("//////////////////////////////////////////////////////////////////////////////\r\n//CHECK#2\r\nif false;\r\n//\r\n//////////////////////////////////////////////////////////////////////////////\r\n\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

