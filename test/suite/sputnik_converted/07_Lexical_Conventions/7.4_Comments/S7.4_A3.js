// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.4_A3;
 * @section: 7.4;
 * @assertion: Multi line comments cannot nest; 
 * @description: Try use nested comments;
 * @negative 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.4_A3",

path: "7.4",

description: "Try use nested comments",

test: function testcase() {
  try {
     (function() {
         eval("/*CHECK#1*/\r\n\r\n/* \r\nvar\r\n\r\n/* x */\r\n= 1;\r\n*/\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

