// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.8.4_A2.3_T1;
 * @section: 7.8.4;
 * @assertion: Correct interpretation of DIGITS;
 * @description: Check DIGITS;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.8.4_A2.3_T1",

path: "07_Lexical_Conventions\7.8_Literals\7.8.4_String_Literals\S7.8.4_A2.3_T1.js",

assertion: "Correct interpretation of DIGITS",

description: "Check DIGITS",

test: function testcase() {
   //CHECK#0-9
unicode = ["\u0030", "\u0031", "\u0032", "\u0033", "\u0034", "\u0035", "\u0036", "\u0037", "\u0038", "\u0039"];
character = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
for (index = 0; index <= 9; index++) {
  if (unicode[index] !== character[index]) {
    $ERROR('#' + character[index] + ' ');
  }
}

 }
});

