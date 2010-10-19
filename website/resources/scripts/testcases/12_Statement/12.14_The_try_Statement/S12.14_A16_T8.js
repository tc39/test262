// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S12.14_A16_T8;
 * @section: 12.14, 12.1;
 * @assertion: TryStatement: "try Block Catch" or "try Block Finally" or "try Block Catch Finally";
 * @description: Block: "{ StatementList }". Catch: "catch (Identifier ) Block". Checking if execution of "try{} catch(){finally{}" fails;
 * @negative
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.14_A16_T8",

path: "12.14, 12.1",

description: "Block: \"{ StatementList }\". Catch: \"catch (Identifier ) Block\". Checking if execution of \"try{} catch(){finally{}\" fails",

test: function testcase() {
  try {
     (function() {
         eval("// CHECK#1\r\ntry{}\r\ncatch(){\r\nfinally{}\r\n\r\n\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

