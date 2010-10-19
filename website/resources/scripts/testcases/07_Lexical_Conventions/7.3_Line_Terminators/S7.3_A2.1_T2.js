// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.3_A2.1_T2;
 * @section: 7.3;
 * @assertion: LINE FEED (U+000A) within strings is not allowed;
 * @description: Use real LINE FEED into string;  
 * @negative
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.3_A2.1_T2",

path: "7.3",

description: "Use real LINE FEED into string",

test: function testcase() {
  try {
     (function() {
         eval("//CHECK#1\r\n\"\r\nstr\r\ning\r\n\";\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

