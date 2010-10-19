// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.5_A2;
* @section: 12.5;
* @assertion: In the "if" Statement eval in Expression is admitted;
* @description: Checking by using eval "eval("true")";
* @negative;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.5_A2",

path: "12.5",

description: "Checking by using eval \"eval(\"true\")\"",

test: function testcase() {
  try {
     (function() {
         if (eval("true")) $FAIL('#1: In the "if" Statement eval as Expression is admitted');
 })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

