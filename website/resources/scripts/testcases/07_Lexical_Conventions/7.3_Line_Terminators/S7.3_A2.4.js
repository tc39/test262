// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.3_A2.4;
 * @section: 7.3;
 * @assertion: PARAGRAPH SEPARATOR (U+2029) within strings is not allowed;
 * @description: Insert PARAGRAPH SEPARATOR (\u2029) into string;  
 * @negative
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.3_A2.4",

path: "7.3",

description: "Insert PARAGRAPH SEPARATOR (\\u2029) into string",

test: function testcase() {
  try {
     (function() {
         // CHECK#1
if (eval("'\u2029str\u2029ing\u2029'") === "\u2029str\u2029ing\u2029") {
  $ERROR('#1: eval("\'\\u2029str\\u2029ing\\u2029\'") === "\\u2029str\\u2029ing\\u2029"');
}
 })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

