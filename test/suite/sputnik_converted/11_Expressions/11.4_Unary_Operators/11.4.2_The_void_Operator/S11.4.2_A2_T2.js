// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.4.2_A2_T2;
* @section: 11.4.2;
* @assertion: Operator "void" uses GetValue;
* @description: If GetBase(x) is null, throw ReferenceError;
* @negative
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.4.2_A2_T2",

path: "11.4.2",

description: "If GetBase(x) is null, throw ReferenceError",

test: function testcase() {
  try {
     (function() {
         eval("//CHECK#1\r\nvoid x;\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

