// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.9_A6.4_T1;
 * @section: 7.9, 12.6.3;
 * @assertion: Check For Statement for automatic semicolon insertion;
 * @description: Three semicolons. For header is (false semicolon false semicolon false semicolon);
 * @negative 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.9_A6.4_T1",

path: "7.9, 12.6.3",

description: "Three semicolons. For header is (false semicolon false semicolon false semicolon)",

test: function testcase() {
  try {
     (function() {
         eval("//CHECK#1\r\nfor(false;false;false;) {\r\n  break;\r\n}\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

