// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S8.3_A2.2;
 * @section: 8.3;
 * @assertion: The false is reserved word;
 * @description: Checking if execution of "false=0" fails;
 * @negative
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S8.3_A2.2",

path: "8.3",

description: "Checking if execution of \"false=0\" fails",

test: function testcase() {
  try {
     (function() {
         eval("false = 0;\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

