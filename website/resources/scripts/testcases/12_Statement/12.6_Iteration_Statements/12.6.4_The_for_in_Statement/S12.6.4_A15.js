// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.6.4_A15;
* @section: 12.6.4;
* @assertion: Block within a "for-in" Expression is not allowed;
* @description: Using block within "for-in" Expression;
* @negative;
*/

// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.6.4_A15",

path: "12.6.4",

description: "Using block within \"for-in\" Expression",

test: function testcase() {
  try {
     (function() {
         eval("var __arr=[1,2,3];\r\n\r\n//////////////////////////////////////////////////////////////////////////////\r\n//CHECK#\r\nfor(x in {__arr}){\r\n   break ;\r\n};\r\n//\r\n//////////////////////////////////////////////////////////////////////////////\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

