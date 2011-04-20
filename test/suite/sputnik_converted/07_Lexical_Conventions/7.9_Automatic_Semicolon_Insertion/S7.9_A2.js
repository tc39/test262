// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.9_A2;
 * @section: 7.9, 12.8, 12.12;
 * @assertion: Check Break Statement for automatic semicolon insertion;
 * @description: Try use break \n Label construction; 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.9_A2",

path: "07_Lexical_Conventions\7.9_Automatic_Semicolon_Insertion\S7.9_A2.js",

assertion: "Check Break Statement for automatic semicolon insertion",

description: "Try use break \\n Label construction",

test: function testcase() {
   //CHECK#1
label1: for (var i = 0; i <= 0; i++) {
  for (var j = 0; j <= 0; j++) {
    break label1;
  }
  $ERROR('#1: Check break statement for automatic semicolon insertion');
}

//CHECK#2
var result = false;
label2: for (var i = 0; i <= 0; i++) {
  for (var j = 0; j <= 0; j++) {
    break 
    label2;
  }  
  result = true;
}

if (result !== true) {
  $ERROR('#2: Check break statement for automatic semicolon insertion');
}

 }
});

