// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S8.2_A2;
 * @section: 8.2;
 * @assertion: The null is resrved word;
 * @description: Checking if execution of "var null" fails;
 * @negative;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S8.2_A2",

path: "8.2",

description: "Checking if execution of \"var null\" fails",

test: function testcase() {
  try {
     (function() {
         eval("var null;\r\n\r\n\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

