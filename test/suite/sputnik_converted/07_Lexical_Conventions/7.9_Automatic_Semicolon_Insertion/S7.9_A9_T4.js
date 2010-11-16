// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.9_A9_T4;
 * @section: 7.9, 12.6.1;
 * @assertion: Check Do-While Statement for automatic semicolon insertion;
 * @description: Execute do ; while \n (false) true;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.9_A9_T4",

path: "7.9, 12.6.1",

description: "Execute do ; while \\n (false) true",

test: function testcase() {
   //CHECK#1
do ; while 
(false) true

 }
});

