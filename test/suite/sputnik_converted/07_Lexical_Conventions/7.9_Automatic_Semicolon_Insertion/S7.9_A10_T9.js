// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.9_A10_T9;
 * @section: 7.9;
 * @assertion: Check {} for automatic semicolon insertion;
 * @description: Checking if execution of "{1 \n 2} 3" passes;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.9_A10_T9",

path: "07_Lexical_Conventions\7.9_Automatic_Semicolon_Insertion\S7.9_A10_T9.js",

assertion: "Check {} for automatic semicolon insertion",

description: "Checking if execution of \"{1 \\n 2} 3\" passes",

test: function testcase() {
   //CHECK#1
{1 
2} 3

 }
});

