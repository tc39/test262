// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S12.11_A3_T1;
 * @section: 12.11;
 * @assertion: Syntax constructions of switch statement;
 * @description: Checking if execution of "switch() {}" fails;
 * @negative;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.11_A3_T1",

path: "12.11",

description: "Checking if execution of \"switch() {}\" fails",

test: function testcase() {
  try {
     (function() {
         eval("function SwitchTest(value){\r\n  var result = 0;\r\n  \r\n  switch() {\r\n    case 0:\r\n      result += 2;\r\n    default:\r\n      result += 32;\r\n      break;\r\n  }\r\n  \r\n  return result;\r\n}\r\n\r\nvar x = SwitchTest(0);\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

