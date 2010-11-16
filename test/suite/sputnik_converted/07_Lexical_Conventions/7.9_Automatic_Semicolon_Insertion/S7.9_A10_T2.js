// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.9_A10_T2;
 * @section: 7.9;
 * @assertion: Check {} for automatic semicolon insertion;
 * @description: Checking if execution of "{}*1" fails;
 * @negative
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.9_A10_T2",

path: "7.9",

description: "Checking if execution of \"{}*1\" fails",

test: function testcase() {
  try {
     (function() {
         eval("//CHECK#1\r\n{} * 1\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

