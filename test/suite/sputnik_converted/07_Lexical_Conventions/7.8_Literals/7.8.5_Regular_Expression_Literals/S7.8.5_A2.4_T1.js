// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.8.5_A2.4_T1;
 * @section: 7.8.5;
 * @assertion: RegularExpressionChar :: BackslashSequence :: \NonTerminator,  
 * RegularExpressionFlags :: [empty];
 * @description: Check similar to (/a\1/.source === "a\\1");  
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.8.5_A2.4_T1",

path: "07_Lexical_Conventions\7.8_Literals\7.8.5_Regular_Expression_Literals\S7.8.5_A2.4_T1.js",

assertion: "RegularExpressionChar :: BackslashSequence :: \\NonTerminator,",

description: "Check similar to (/a\\1/.source === \"a\\\\1\")",

test: function testcase() {
   //CHECK#1
if (/a\1/.source !== "a\\1") {
  $ERROR('#1: /a\\1/');
}   

//CHECK#2
if (/a\a/.source !== "a\\a") {
  $ERROR('#2: /a\\a/');
}

//CHECK#3
if (/,\;/.source !== ",\\;") {
  $ERROR('#3: /,\\;/');
}

//CHECK#4
if (/ \ /.source !== " \\ ") {
  $ERROR('#4: / \\ /');
}  

 }
});

