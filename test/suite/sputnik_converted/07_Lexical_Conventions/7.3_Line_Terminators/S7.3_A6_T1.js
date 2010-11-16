// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.3_A6_T1;
 * @section: 7.3;
 * @assertion: Line Terminator cannot be expressed as a Unicode escape sequence consisting of six characters, namely \u plus four hexadecimal digits;
 * @description: Insert LINE FEED (U+000A) in var x;  
 * @negative
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.3_A6_T1",

path: "7.3",

description: "Insert LINE FEED (U+000A) in var x",

test: function testcase() {
  try {
     (function() {
         eval("var\\u000Ax;\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

