// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.1_A2_T1;
 * @section: 15.1;
 * @assertion: The global object does not have a [[Call]] property;
 * @description: It is not possible to invoke the global object as a function;
 * @negative  
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1_A2_T1",

path: "15.1",

description: "It is not possible to invoke the global object as a function",

test: function testcase() {
  try {
     (function() {
         eval("this();\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

