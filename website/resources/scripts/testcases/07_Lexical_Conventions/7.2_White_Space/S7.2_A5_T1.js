// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.2_A5_T1;
 * @section: 7.2;
 * @assertion: White space cannot be expressed as a Unicode escape sequence consisting of six characters, namely \u plus four hexadecimal digits;
 * @description: Use TAB (U+0009);  
 * @negative
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.2_A5_T1",

path: "7.2",

description: "Use TAB (U+0009)",

test: function testcase() {
  try {
     (function() {
         eval("var\\u0009x;\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

