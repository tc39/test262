// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.8.4_A6.1_T4;
 * @section: 7.8.4;
 * @assertion: EscapeSequence :: HexEscapeSequence :: x HexDigit HexDigit;
 * @description: HexEscapeSequence :: x0G is incorrect;
 * @negative
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.8.4_A6.1_T4",

path: "7.8.4",

description: "HexEscapeSequence :: x0G is incorrect",

test: function testcase() {
  try {
     (function() {
         eval("//CHECK#\r\n\"\\x0G\"\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

