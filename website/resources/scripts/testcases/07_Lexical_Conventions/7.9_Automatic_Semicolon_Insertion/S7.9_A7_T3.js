// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.9_A7_T3;
 * @section: 7.9, 12.2;
 * @assertion: Check Var Statement for automatic semicolon insertion;
 * @description: Checking if execution of "var x \n x = 1" passes;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.9_A7_T3",

path: "7.9, 12.2",

description: "Checking if execution of \"var x \\n x = 1\" passes",

test: function testcase() {
   //CHECK#1
var x
x = 1


 }
});

