// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.3.2_A1.1_T1;
* @section: 11.3.2, 11.6.3, 7.3;
* @assertion: Line Terminator between LeftHandSideExpression and "--" is not allowed;
* @description: Checking Line Feed;
* @negative
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.3.2_A1.1_T1",

path: "11.3.2, 11.6.3, 7.3",

description: "Checking Line Feed",

test: function testcase() {
  try {
     (function() {
         //CHECK#1
eval("var x = 1; x\u000A--");
 })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

