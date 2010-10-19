// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.1.1_A1;
 * @section: 11.1.1;
 * @assertion: The "this" is reserved word;
 * @description: Checking if execution of "this=1" fails;
 * @negative
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.1.1_A1",

path: "11.1.1",

description: "Checking if execution of \"this=1\" fails",

test: function testcase() {
  try {
     (function() {
         eval("this = 1;\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

