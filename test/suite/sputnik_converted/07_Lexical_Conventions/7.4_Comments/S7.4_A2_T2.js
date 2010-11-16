// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.4_A2_T2;
 * @section: 7.4;
 * @assertion: Correct interpretation of multi line comments;
 * @description: Try use /*CHECK#1/. This is not closed multi line comment;  
 * @negative
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.4_A2_T2",

path: "7.4",

description: "Try use /*CHECK#1/. This is not closed multi line comment",

test: function testcase() {
  try {
     (function() {
         eval("/*CHECK#1/\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

