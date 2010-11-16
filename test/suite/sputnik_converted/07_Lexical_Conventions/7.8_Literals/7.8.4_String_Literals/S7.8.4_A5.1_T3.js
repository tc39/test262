// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.8.4_A5.1_T3;
 * @section: 7.8.4;
 * @assertion: EscapeSequence :: 0;
 * @description: "\x00";
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.8.4_A5.1_T3",

path: "7.8.4",

description: "\"\\x00\"",

test: function testcase() {
   //CHECK#1
if ("\x00" !== "\0") {
  $ERROR('#1: "\\x00" === "\\0"');
}

 }
});

