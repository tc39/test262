// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.3_A2.3;
 * @section: 7.3;
 * @assertion: LINE SEPARATOR (U+2028) within strings is not allowed;
 * @description: Insert LINE SEPARATOR (\u2028) into string;  
 * @negative
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.3_A2.3",

path: "7.3",

description: "Insert LINE SEPARATOR (\\u2028) into string",

test: function testcase() {
  try {
     (function() {
         // CHECK#1
if (eval("'\u2028str\u2028ing\u2028'") === "\u2028str\u2028ing\u2028") {
  $ERROR('#1: eval("\'\\u2028str\\u2028ing\\u2028\'") === "\\u2028str\\u2028ing\\u2028"');
}
 })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

