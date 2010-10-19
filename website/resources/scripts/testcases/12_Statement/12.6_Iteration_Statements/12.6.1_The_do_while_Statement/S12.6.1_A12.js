// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.6.1_A12;
* @section: 12.6.1;
* @assertion: Any statement within "do-while" construction must be a compound;
* @description: Checking if execution of "do var x=1; var y =2; while (0)" fails;
* @negative;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.6.1_A12",

path: "12.6.1",

description: "Checking if execution of \"do var x=1; var y =2; while (0)\" fails",

test: function testcase() {
  try {
     (function() {
         eval("//////////////////////////////////////////////////////////////////////////////\r\n//CHECK#1\r\ndo var x=1; var y =2; while (0);\r\n//\r\n//////////////////////////////////////////////////////////////////////////////\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

