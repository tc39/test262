// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.8.4_A5.1_T1;
 * @section: 7.8.4;
 * @assertion: EscapeSequence :: 0;
 * @description: String.fromCharCode(0x0000);
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.8.4_A5.1_T1",

path: "07_Lexical_Conventions\7.8_Literals\7.8.4_String_Literals\S7.8.4_A5.1_T1.js",

assertion: "EscapeSequence :: 0",

description: "String.fromCharCode(0x0000)",

test: function testcase() {
   //CHECK#1
if (String.fromCharCode(0x0000) !== "\0") {
  $ERROR('#1: String.fromCharCode(0x0000) === "\\0"');
}

 }
});

