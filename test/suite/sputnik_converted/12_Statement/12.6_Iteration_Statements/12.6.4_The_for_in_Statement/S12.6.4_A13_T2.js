// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.6.4_A13_T2;
* @section: 12.6.4;
* @assertion: FunctionDeclaration within a "for-in" Statement is not allowed;
* @description: Declaring function within a "for-in" Statement that is within a function call;
* @negative;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.6.4_A13_T2",

path: "12.6.4",

description: "Declaring function within a \"for-in\" Statement that is within a function call",

test: function testcase() {
  try {
     (function() {
         eval("(function(){\r\n\r\nfor(x in this){\r\n    function __func(){};\r\n};\r\n\r\n})();\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

