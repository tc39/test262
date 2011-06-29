// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.6.1_A13_T1;
* @section: 12.6.1, 13;
* @assertion: FunctionDeclaration within a "do-while" Block in strict code is not allowed;
* @description: Declaring function within a "do-while" loop;
* @negative SyntaxError;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.6.1_A13_T1",

path: "12_Statement\12.6_Iteration_Statements\12.6.1_The_do_while_Statement\S12.6.1_A13_T1.js",

assertion: "FunctionDeclaration within a \"do-while\" Block in strict code is not allowed",

description: "Declaring function within a \"do-while\" loop",

test: function testcase() {
   "use strict";
if (!strict_mode) { throw new SyntaxError('unspecified case'); }

do{
    function __func(){};
} while(0);

 }
});

