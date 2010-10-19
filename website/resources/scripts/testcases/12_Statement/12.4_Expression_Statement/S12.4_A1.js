// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.4_A1;
* @section: 12.4;
* @assertion: An ExpressionStatement can not start with the function keyword because that might make it ambiguous with a FunctionDeclaration;
* @description: Checking if execution of "function(){}()" fails;
* @negative;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.4_A1",

path: "12.4",

description: "Checking if execution of \"function(){}()\" fails",

test: function testcase() {
  try {
     (function() {
         eval("//////////////////////////////////////////////////////////////////////////////\r\n//CHECK#1\r\nfunction(){}();\r\n//\r\n//////////////////////////////////////////////////////////////////////////////\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

