// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.9_A4;
 * @section: 7.9, 12.13;
 * @assertion: Check Throw Statement for automatic semicolon insertion;
 * @description: Try use Throw \n Expression construction; 
 * @negative   
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.9_A4",

path: "7.9, 12.13",

description: "Try use Throw \\n Expression construction",

test: function testcase() {
  try {
     (function() {
         eval("//CHECK#1\r\ntry {\r\n  throw \r\n  1;\r\n} catch(e) {  \r\n}  \r\n$ERROR(\'#1: Check throw statement for automatic semicolon insertion\');\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

