// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.2.4_A1.3_T1;
* @section: 11.2.4, 11.2.3, 10.1.8;
* @assertion: Arguments : (ArgumentList : ArgumentList,, AssignmentExpression) is a bad syntax;
* @description: incorrect syntax;
* @negative;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.2.4_A1.3_T1",

path: "11.2.4, 11.2.3, 10.1.8",

description: "incorrect syntax",

test: function testcase() {
  try {
     (function() {
         eval("function f_arg() {\r\n}\r\n\r\nf_arg(1,,2);\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

