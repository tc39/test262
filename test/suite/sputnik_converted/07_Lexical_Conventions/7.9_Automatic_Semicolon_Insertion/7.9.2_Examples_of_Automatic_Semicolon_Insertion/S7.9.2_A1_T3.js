// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.9.2_A1_T3;
 * @section: 7.9.2;
 * @assertion: Check examples for automatic semicolon insertion from the Standart;
 * @description: for( a ; b \n ) is not a valid sentence in the ECMAScript grammar;
 * @negative;   
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.9.2_A1_T3",

path: "7.9.2",

description: "for( a ; b \\n ) is not a valid sentence in the ECMAScript grammar",

test: function testcase() {
  try {
     (function() {
         eval("//CHECK#1\r\nfor( a ; b\r\n)\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

