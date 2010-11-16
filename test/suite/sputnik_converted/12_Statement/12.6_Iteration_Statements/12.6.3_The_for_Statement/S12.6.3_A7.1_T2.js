// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.6.3_A7.1_T2;
* @section: 12.6.3;
* @assertion: Only three expressions and two semicolons in "for(with var)" braces are allowed. 
* Appearing of for (ExpressionNoIn_opt ; Expression_opt ; Expression_opt; Expression_opt; Expression_opt;) statement leads to SyntaxError;
* @description: Checking if execution of "for(var index=0; index<10; index+=4; index++; index--)" fails ;
* @negative;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.6.3_A7.1_T2",

path: "12.6.3",

description: "Checking if execution of \"for(var index=0; index<10; index+=4; index++; index--)\" fails",

test: function testcase() {
  try {
     (function() {
         eval("//////////////////////////////////////////////////////////////////////////////\r\n//CHECK#1\r\nfor(var index=0; index<10; index+=4; index++; index--) ;\r\n//\r\n//////////////////////////////////////////////////////////////////////////////\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

