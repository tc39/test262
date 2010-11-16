// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.9.2_A1_T1;
 * @section: 7.9.2;
 * @assertion: Check examples for automatic semicolon insertion from the Standart;
 * @description: { 1 2 } 3 is not a valid sentence in the ECMAScript grammar;
 * @negative;   
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.9.2_A1_T1",

path: "7.9.2",

description: "{ 1 2 } 3 is not a valid sentence in the ECMAScript grammar",

test: function testcase() {
  try {
     (function() {
         eval("//CHECK#1\r\n{ 1 2 } 3\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

