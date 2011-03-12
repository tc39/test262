// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S13_A7_T3;
* @section: 13;
* @assertion: The FunctionBody must be SourceElements;
* @description: Checking if execution of "function __func(){\A\B\C}" fails; 
* @negative;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S13.0_A7_T3",

path: "13.0",

description: "Checking if execution of \"function __func(){\\A\\B\\C}\" fails",

test: function testcase() {
  try {
     (function() {
         eval("function __func(){\\A\\B\\C};\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

