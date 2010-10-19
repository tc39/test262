// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.5_A9_T1;
* @section: 12.5;
* @assertion: Function declaration within an "if" statement is not allowed;
* @description: Declaring function within an "if" statement;
* @negative;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.5_A9_T1",

path: "12.5",

description: "Declaring function within an \"if\" statement",

test: function testcase() {
  try {
     (function() {
         eval("if (true) {\r\n    function __func(){};\r\n} else {\r\n    function __func(){};\r\n}\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

