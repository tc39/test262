// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.8.3_A4.1_T6;
 * @section: 7.8.3;
 * @assertion: DecimalLiteral :: ExponentPart is incorrect;  
 * @description: ExponentPart :: E DecimalDigits;
 * @negative
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.8.3_A4.1_T6",

path: "7.8.3",

description: "ExponentPart :: E DecimalDigits",

test: function testcase() {
  try {
     (function() {
         eval("//CHECK#1\r\nE+1\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

