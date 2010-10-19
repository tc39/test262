// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.1.5_A4.1;
* @section: 11.1.5;
* @assertion: The PropertyName is not BooleanLiteral;
* @description: Checking if execution of "var object = {true : 1}" fails;
* @negative
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.1.5_A4.1",

path: "11.1.5",

description: "Checking if execution of \"var object = {true : 1}\" fails",

test: function testcase() {
  try {
     (function() {
         eval("//CHECK#1\r\nvar object = {true : 1};\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

