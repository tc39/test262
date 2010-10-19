// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.1.2.1_A2_T2;
 * @section: 15.1.2.1, 16;
 * @assertion: If the parse fails, throw a SyntaxError exception (but see also clause 16);
 * @description: Checking if execution of "eval("x = 1; x\u000A++")" fails; 
 * @negative 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.2.1_A2_T2",

path: "15.1.2.1, 16",

description: "Checking if execution of \"eval(\"x = 1; x\\u000A++\")\" fails",

test: function testcase() {
  try {
     (function() {
         //CHECK#1
var x;
eval("x = 1; x\u000A++"); 
 })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

