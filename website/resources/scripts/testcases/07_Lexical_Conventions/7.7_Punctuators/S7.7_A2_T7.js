// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.7_A2_T7;
 * @section: 7.7;
 * @assertion: Punctuator cannot be expressed as a Unicode escape sequence consisting of six characters, namely \u plus four hexadecimal digits;
 * @description: Try to use + as a Unicode \u002B;  
 * @negative
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.7_A2_T7",

path: "7.7",

description: "Try to use + as a Unicode \\u002B",

test: function testcase() {
  try {
     (function() {
         eval("1\\u002B2;\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

