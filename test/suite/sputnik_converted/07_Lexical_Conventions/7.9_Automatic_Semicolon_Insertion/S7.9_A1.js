// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.9_A1;
 * @section: 7.9, 12.7, 12.12;
 * @assertion: Check Continue Statement for automatic semicolon insertion;
 * @description: Try use continue \n Label construction;    
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.9_A1",

path: "07_Lexical_Conventions\7.9_Automatic_Semicolon_Insertion\S7.9_A1.js",

assertion: "Check Continue Statement for automatic semicolon insertion",

description: "Try use continue \\n Label construction",

test: function testcase() {
   //CHECK#1
label1: for (var i = 0; i <= 0; i++) {
  for (var j = 0; j <= 1; j++) {
    if (j === 0) {
      continue label1;
    } else {
      $ERROR('#1: Check continue statement for automatic semicolon insertion');
    }
  }  
}

//CHECK#2
var result = false;
label2: for (var i = 0; i <= 1; i++) {
  for (var j = 0; j <= 1; j++) {
    if (j === 0) {
      continue 
      label2; 
    } else {
      result = true;
    }
  }    
}

if (result !== true) {
  $ERROR('#2: Check continue statement for automatic semicolon insertion');
}

 }
});

