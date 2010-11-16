// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.5_A9_T3;
* @section: 12.5;
* @assertion: Function declaration within an "if" statement is not allowed;
* @description: Declaring function within an "if" statement that is declared within the function declaration;
* @negative;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.5_A9_T3",

path: "12.5",

description: "Declaring function within an \"if\" statement that is declared within the function declaration",

test: function testcase() {
  try {
     (function() {
         eval("function(){\r\n\r\nif (true) {\r\n    function __func(){};\r\n} else {\r\n    function __func(){};\r\n}\r\n\r\n};\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

