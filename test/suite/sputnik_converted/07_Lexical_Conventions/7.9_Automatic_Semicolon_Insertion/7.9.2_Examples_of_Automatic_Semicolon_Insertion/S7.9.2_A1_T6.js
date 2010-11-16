// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.9.2_A1_T6;
 * @section: 7.9.2;
 * @assertion: Check examples for automatic semicolon insertion from the Standart;
 * @description: if(a>b) \n else c=d is not a valid sentence in the ECMAScript grammar;
 * @negative;   
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.9.2_A1_T6",

path: "7.9.2",

description: "if(a>b) \\n else c=d is not a valid sentence in the ECMAScript grammar",

test: function testcase() {
  try {
     (function() {
         eval("//CHECK#1\r\nvar a=1,b=2,c=3,d;\r\nif(a>b)\r\nelse c=d\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

