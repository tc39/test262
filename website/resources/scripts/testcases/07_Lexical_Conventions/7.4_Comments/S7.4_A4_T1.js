// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.4_A4_T1;
 * @section: 7.4;
 * @assertion: Single and Multi line comments are used together; 
 * @description: Try use 2 close comment tags; 
 * @negative 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.4_A4_T1",

path: "7.4",

description: "Try use 2 close comment tags",

test: function testcase() {
  try {
     (function() {
         eval("/*CHECK#1*/\r\n\r\n/* var*/\r\nx*/\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

