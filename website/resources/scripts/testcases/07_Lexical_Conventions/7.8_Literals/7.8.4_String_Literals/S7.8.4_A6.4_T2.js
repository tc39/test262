// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.8.4_A6.4_T2;
 * @section: 7.8.4;
 * @assertion: HexEscapeSequence \X HexDigit HexDigit is incorrect;
 * @description: Checking if execution of "\X0A" passes;
 * @negative
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.8.4_A6.4_T2",

path: "7.8.4",

description: "Checking if execution of \"\\X0A\" passes",

test: function testcase() {
  try {
     (function() {
         eval("//CHECK#1\r\n\"\\X0A\"\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

