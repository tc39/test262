// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.3_A2.1_T1;
 * @section: 7.3;
 * @assertion: LINE FEED (U+000A) within strings is not allowed;
 * @description: Insert LINE FEED (\u000A) into string;
 * @negative 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.3_A2.1_T1",

path: "7.3",

description: "Insert LINE FEED (\\u000A) into string",

test: function testcase() {
  try {
     (function() {
         // CHECK#1
if (eval("'\u000Astr\u000Aing\u000A'") === "\u000Astr\u000Aing\u000A") {
  $ERROR('#1: eval("\'\\u000Astr\\u000Aing\\u000A\'") === "\\u000Astr\\u000Aing\\u000A"');
}
 })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

