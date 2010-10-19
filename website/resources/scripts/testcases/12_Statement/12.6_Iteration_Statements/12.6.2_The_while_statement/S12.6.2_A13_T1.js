// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.6.2_A13_T1;
* @section: 12.6.2;
* @assertion: FunctionDeclaration within a "while" Statement is not allowed;
* @description: Checking if declaring a function within a "while" Statement leads to an exception;
* @negative;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.6.2_A13_T1",

path: "12.6.2",

description: "Checking if declaring a function within a \"while\" Statement leads to an exception",

test: function testcase() {
  try {
     (function() {
         eval("while(0){\r\n    function __func(){};\r\n};\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

