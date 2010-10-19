// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S8.3_A2.1;
 * @section: 8.3;
 * @assertion: The true is reserved word;
 * @description: Checking if execution of "true=1" fails;
 * @negative
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S8.3_A2.1",

path: "8.3",

description: "Checking if execution of \"true=1\" fails",

test: function testcase() {
  try {
     (function() {
         eval("true = 1;\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

