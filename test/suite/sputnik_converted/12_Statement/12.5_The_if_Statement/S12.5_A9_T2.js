// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.5_A9_T2;
* @section: 12.5;
* @assertion: Function declaration within an "if" statement in strict code is not allowed;
* @description: Declaring function within an "if" that is declared within the strict function;
* @negative SyntaxError;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.5_A9_T2",

path: "TestCases/12_Statement/12.5_The_if_Statement/S12.5_A9_T2.js",

assertion: "Function declaration within an \"if\" statement in strict code is not allowed",

description: "Declaring function within an \"if\" that is declared within the strict function",

test: function testcase() {
   (function(){
"use strict";

if (true) {
    function __func(){};
} else {
    function __func(){};
}

});

 }
});

