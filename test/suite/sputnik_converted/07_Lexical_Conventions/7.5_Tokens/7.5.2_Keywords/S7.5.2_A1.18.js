// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.5.2_A1.18;
 * @section: 7.5.2;
 * @assertion: The "this" token can not be used as identifier;
 * @description: Checking if execution of "this=1" fails;  
 * @negative
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.5.2_A1.18",

path: "7.5.2",

description: "Checking if execution of \"this=1\" fails",

test: function testcase() {
  try {
     (function() {
         eval("this = 1;\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

