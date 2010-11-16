// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.9_A7_T7;
 * @section: 7.9, 12.2;
 * @assertion: Check Var Statement for automatic semicolon insertion;
 * @description: Checking if execution of "var x \n y" passes;
 * @negative
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.9_A7_T7",

path: "7.9, 12.2",

description: "Checking if execution of \"var x \\n y\" passes",

test: function testcase() {
  try {
     (function() {
         eval("//CHECK#1\r\nvar x \r\ny \r\n\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

