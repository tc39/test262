// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S12.13_A1;
 * @section: 12.13;
 * @assertion: Sanity test for throw statement;
 * @description: Trying to throw exception with "throw";
 * @negative;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.13_A1",

path: "12.13",

description: "Trying to throw exception with \"throw\"",

test: function testcase() {
  try {
     (function() {
         eval("throw \"error\";\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

