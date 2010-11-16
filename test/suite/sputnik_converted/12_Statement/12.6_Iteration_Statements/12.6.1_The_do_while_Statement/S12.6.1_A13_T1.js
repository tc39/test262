// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.6.1_A13_T1;
* @section: 12.6.1, 13;
* @assertion: FunctionDeclaration within a "do-while" Block is not allowed;
* @description: Declaring function within a "do-while" loop;
* @negative;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.6.1_A13_T1",

path: "12.6.1, 13",

description: "Declaring function within a \"do-while\" loop",

test: function testcase() {
  try {
     (function() {
         eval("do{\r\n    function __func(){};\r\n} while(0);\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

