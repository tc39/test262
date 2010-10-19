// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.9_A1_T6;
* @section: 12.9;
* @assertion: Appearing of "return" without a function body leads to syntax error;
* @description: Checking if execution of "return" with no function, placed into a loop, fails;
* @negative;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.9_A1_T6",

path: "12.9",

description: "Checking if execution of \"return\" with no function, placed into a loop, fails",

test: function testcase() {
  try {
     (function() {
         eval("//////////////////////////////////////////////////////////////////////////////\r\n//CHECK#1\r\ndo {\r\n    var x=1;\r\n    return;\r\n    var y=2;\r\n} while(0);\r\n//\r\n//////////////////////////////////////////////////////////////////////////////\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

