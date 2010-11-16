// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.9_A5.3_T1;
 * @section: 7.9, 12.4, 11.13.2;
 * @assertion: Check Postfix Decrement Operator for automatic semicolon insertion;
 * @description: Try use Variable \n -- construction; 
 * @negative   
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.9_A5.3_T1",

path: "7.9, 12.4, 11.13.2",

description: "Try use Variable \\n -- construction",

test: function testcase() {
  try {
     (function() {
         eval("//CHECK#1\r\nvar x = 1;\r\nx\r\n--;\r\n$ERROR(\'#1: Check Postfix Decrement Operator for automatic semicolon insertion\');\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

