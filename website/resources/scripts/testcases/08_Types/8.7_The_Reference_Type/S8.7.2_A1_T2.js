// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S8.7.2_A1_T2;
* @section: 8.7.2;
* @assertion: GetValue(V) mast fail;
* @description: Checking if execution of "1=1" fails; 
* @negative;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S8.7.2_A1_T2",

path: "8.7.2",

description: "Checking if execution of \"1=1\" fails",

test: function testcase() {
  try {
     (function() {
         eval("1=1;\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

