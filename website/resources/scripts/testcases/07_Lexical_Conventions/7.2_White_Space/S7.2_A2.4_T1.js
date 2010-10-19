// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.2_A2.4_T1;
 * @section: 7.2, 7.8.4;
 * @assertion: SPACE (U+0020) may occur within strings;
 * @description: Use SPACE(\u0020);  
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.2_A2.4_T1",

path: "7.2, 7.8.4",

description: "Use SPACE(\\u0020)",

test: function testcase() {
   // CHECK#1
if (eval("'\u0020str\u0020ing\u0020'") !== "\u0020str\u0020ing\u0020") {
  $ERROR('#1: eval("\'\\u0020str\\u0020ing\\u0020\'") === "\\u0020str\\u0020ing\\u0020"');
}

//CHECK#2
if (eval("' str ing '") !== " str ing ") {
  $ERROR('#2: eval("\' str ing \'") === " str ing "');
}

 }
});

