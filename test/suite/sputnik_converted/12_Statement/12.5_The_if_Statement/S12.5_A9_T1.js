// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.5_A9_T1;
* @section: 12.5;
* @assertion: Function declaration within an "if" statement in strict code is not allowed;
* @description: Declaring function within an "if" statement;
* @negative SyntaxError;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.5_A9_T1",

path: "TestCases/12_Statement/12.5_The_if_Statement/S12.5_A9_T1.js",

assertion: "Function declaration within an \"if\" statement in strict code is not allowed",

description: "Declaring function within an \"if\" statement",

test: function testcase() {
   "use strict";
if (!strict_mode) { throw new SyntaxError('unspecified case'); }

if (true) {
    function __func(){};
} else {
    function __func(){};
}

 }
});

