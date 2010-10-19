// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.1_A1;
* @section: 12.1;
* @assertion: The production Block  { } can't contain function declaration;
* @description: Trying to declare function at the Block statement;
* @negative;
*/

// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.1_A1",

path: "12.1",

description: "Trying to declare function at the Block statement",

test: function testcase() {
  try {
     (function() {
         eval("{\r\n    function __func(){}\r\n}\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

