// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.8.5_A1.4_T1;
 * @section: 7.8.5;
 * @assertion: RegularExpressionFirstChar :: BackslashSequence :: \NonTerminator,  
 * RegularExpressionChars :: [empty], RegularExpressionFlags :: [empty];
 * @description: Check similar to (/\1/.source === "\\1");    
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.8.5_A1.4_T1",

path: "07_Lexical_Conventions\7.8_Literals\7.8.5_Regular_Expression_Literals\S7.8.5_A1.4_T1.js",

assertion: "RegularExpressionFirstChar :: BackslashSequence :: \\NonTerminator,",

description: "Check similar to (/\\1/.source === \"\\\\1\")",

test: function testcase() {
   //CHECK#1
if (/\1/.source !== "\\1") {
  $ERROR('#1: /\\1/');
}   

//CHECK#2
if (/\a/.source !== "\\a") {
  $ERROR('#2: /\\a/');
}

//CHECK#3
if (/\;/.source !== "\\;") {
  $ERROR('#3: /\\;/');
}

//CHECK#4
if (/\ /.source !== "\\ ") {
  $ERROR('#4: /\\ /');
}  

 }
});

