// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.7_A6;
* @section: 12.7;
* @assertion: Appearing of "continue" within a function call that is within an IterationStatement yields SyntaxError;
* @description: Using labaled "continue Identifier" within a function body; 
* @negative;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.7_A6",

path: "12.7",

description: "Using labaled \"continue Identifier\" within a function body",

test: function testcase() {
  try {
     (function() {
         eval("var x=0,y=0;\r\n\r\nLABEL1 : do {\r\n    x++;\r\n    (function(){continue LABEL1;})();\r\n    y++;\r\n} while(0);\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

