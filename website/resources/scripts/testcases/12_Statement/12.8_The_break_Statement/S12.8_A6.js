// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.8_A6;
* @section: 12.8;
* @assertion: Appearing of "break" within a function call that is nested in a IterationStatement yields SyntaxError;
* @description: Checking if using "break Identifier" within a function body appears to be invalid;
* @negative;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.8_A6",

path: "12.8",

description: "Checking if using \"break Identifier\" within a function body appears to be invalid",

test: function testcase() {
  try {
     (function() {
         eval("var x=0,y=0;\r\n\r\nLABEL1 : do {\r\n    x++;\r\n    (function(){break LABEL1;})();\r\n    y++;\r\n} while(0);\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

