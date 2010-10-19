// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.5.2_A1.5;
 * @section: 7.5.2;
 * @assertion: The "default" token can not be used as identifier;
 * @description: Checking if execution of "default=1" fails;  
 * @negative
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.5.2_A1.5",

path: "7.5.2",

description: "Checking if execution of \"default=1\" fails",

test: function testcase() {
  try {
     (function() {
         eval("default = 1;\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

