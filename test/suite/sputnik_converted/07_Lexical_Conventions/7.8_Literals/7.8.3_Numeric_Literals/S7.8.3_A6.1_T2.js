// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.8.3_A6.1_T2;
 * @section: 7.8.3;
 * @assertion: HexIntegerLiteral :: 0(x/X) is incorrect; 
 * @description: Checking if execution of "0X" passes; 
 * @negative
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.8.3_A6.1_T2",

path: "7.8.3",

description: "Checking if execution of \"0X\" passes",

test: function testcase() {
  try {
     (function() {
         eval("//CHECK#1\r\n0X\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

