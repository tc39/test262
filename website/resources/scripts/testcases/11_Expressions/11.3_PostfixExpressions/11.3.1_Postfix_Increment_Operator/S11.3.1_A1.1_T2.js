// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.3.1_A1.1_T2;
* @section: 11.3.1, 11.6.3, 7.3;
* @assertion: Line Terminator between LeftHandSideExpression and "++" is not allowed;
* @description: Carriage Return;
* @negative
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.3.1_A1.1_T2",

path: "11.3.1, 11.6.3, 7.3",

description: "Carriage Return",

test: function testcase() {
  try {
     (function() {
         //CHECK#1
eval("var x = 1; x\u000D++");
 })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

