// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S12.14_A16_T11;
 * @section: 12.14;
 * @assertion: TryStatement: "try Block Catch" or "try Block Finally" or "try Block Catch Finally";
 * @description: Catch and Finally are placed into the Block of "try" (whitle expected outside);
 * @negative
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.14_A16_T11",

path: "12.14",

description: "Catch and Finally are placed into the Block of \"try\" (whitle expected outside)",

test: function testcase() {
  try {
     (function() {
         eval("// CHECK#1\r\ntry{\r\n  {\r\n  }\r\n  catch(e){}\r\n  finally{}\r\n}\r\n\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

