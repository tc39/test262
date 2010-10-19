// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.6.1_A13_T2;
* @section: 12.6.1, 13;
* @assertion: FunctionDeclaration within a "do-while" Block is not allowed;
* @description: Declaring a function within a "do-while" loop that is within a function call;
* @negative;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.6.1_A13_T2",

path: "12.6.1, 13",

description: "Declaring a function within a \"do-while\" loop that is within a function call",

test: function testcase() {
  try {
     (function() {
         eval("(function(){\r\n\r\ndo{\r\n    function __func(){};\r\n}while(0);\r\n\r\n})();\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

