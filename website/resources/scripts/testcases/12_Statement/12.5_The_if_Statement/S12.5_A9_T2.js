// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.5_A9_T2;
* @section: 12.5;
* @assertion: Function declaration within an "if" statement is not allowed;
* @description: Declaring function within and "if" that is declared within the function call;
* @negative;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.5_A9_T2",

path: "12.5",

description: "Declaring function within and \"if\" that is declared within the function call",

test: function testcase() {
  try {
     (function() {
         eval("(function(){\r\n\r\nif (true) {\r\n    function __func(){};\r\n} else {\r\n    function __func(){};\r\n}\r\n\r\n})();\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

