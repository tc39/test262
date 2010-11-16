// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S12.14_A16_T13;
 * @section: 12.14;
 * @assertion: TryStatement: "try Block Catch" or "try Block Finally" or "try Block Catch Finally";
 * @description: Catch: "catch (Identifier ) Block". Checking if execution of "22" passes at the place of Identifier of "catch";
 * @negative
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.14_A16_T13",

path: "12.14",

description: "Catch: \"catch (Identifier ) Block\". Checking if execution of \"22\" passes at the place of Identifier of \"catch\"",

test: function testcase() {
  try {
     (function() {
         eval("// CHECK#1\r\ntry\r\n{\r\n}\r\ncatch(\"22\")\r\n{\r\n}\r\n\r\n\r\n\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

