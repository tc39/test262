// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S12.11_A3_T3;
 * @section: 12.11;
 * @assertion: Syntax constructions of switch statement;
 * @description: Checking if execution of "switch(value)" fails;
 * @negative;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.11_A3_T3",

path: "12.11",

description: "Checking if execution of \"switch(value)\" fails",

test: function testcase() {
  try {
     (function() {
         eval("switch(value);\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

