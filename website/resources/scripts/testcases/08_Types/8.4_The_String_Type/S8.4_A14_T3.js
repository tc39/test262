// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S8.4_A14_T3;
* @section: 8.4;
* @assertion: When appears not closed double-quote program failes;
* @description: Try to create variable using 4 double-quote;
* @negative;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S8.4_A14_T3",

path: "8.4",

description: "Try to create variable using 4 double-quote",

test: function testcase() {
  try {
     (function() {
         eval("var str = \"\"\"\";\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

