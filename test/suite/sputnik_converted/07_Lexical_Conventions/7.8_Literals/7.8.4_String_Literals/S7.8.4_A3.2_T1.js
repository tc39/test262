// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.8.4_A3.2_T1;
 * @section: 7.8.4;
 * @assertion: StringLiteral :: "\\\" or '\\\' is not correct;
 * @description: Checking if execution of "\\\" fails;  
 * @negative
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.8.4_A3.2_T1",

path: "7.8.4",

description: "Checking if execution of \"\\\\\\\" fails",

test: function testcase() {
  try {
     (function() {
         eval("//CHECK#1\r\n\"\\\\\\\"\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

