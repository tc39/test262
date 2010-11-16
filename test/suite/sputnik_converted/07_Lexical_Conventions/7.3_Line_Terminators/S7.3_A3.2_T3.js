// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/** * @name: S7.3_A3.2_T3; * @section: 7.3, 7.4; * @assertion: Single line comments can not contain CARRIAGE RETURN (U+000D) inside; * @description: Insert real CARRIAGE RETURN into single line comment; * @negative */
// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.3_A3.2_T3",

path: "7.3, 7.4",

description: "Insert real CARRIAGE RETURN into single line comment",

test: function testcase() {
  try {
     (function() {
         eval("// CHECK#1\r//single \rline comment\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

