// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.2_A5_T2;
 * @section: 7.2;
 * @assertion: White space cannot be expressed as a Unicode escape sequence consisting of six characters, namely \u plus four hexadecimal digits;
 * @description: Use VERTICAL TAB (U+000B);  
 * @negative
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.2_A5_T2",

path: "7.2",

description: "Use VERTICAL TAB (U+000B)",

test: function testcase() {
  try {
     (function() {
         eval("var\\u000Bx;\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

