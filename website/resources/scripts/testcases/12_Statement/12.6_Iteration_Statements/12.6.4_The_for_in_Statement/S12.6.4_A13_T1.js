// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.6.4_A13_T1;
* @section: 12.6.4;
* @assertion: FunctionDeclaration within a "for-in" Statement is not allowed;
* @description: Declaring function within a "for-in" Statement;
* @negative;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.6.4_A13_T1",

path: "12.6.4",

description: "Declaring function within a \"for-in\" Statement",

test: function testcase() {
  try {
     (function() {
         eval("for(x in this){\r\n    function __func(){};\r\n};\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

