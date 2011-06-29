// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.6.1_A13_T2;
* @section: 12.6.1, 13;
* @assertion: FunctionDeclaration within a "do-while" Block in strict code is not allowed;
* @description: Declaring a function within a "do-while" loop that is within a strict function;
* @negative SyntaxError;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.6.1_A13_T2",

path: "12_Statement\12.6_Iteration_Statements\12.6.1_The_do_while_Statement\S12.6.1_A13_T2.js",

assertion: "FunctionDeclaration within a \"do-while\" Block in strict code is not allowed",

description: "Declaring a function within a \"do-while\" loop that is within a strict function",

test: function testcase() {
   (function(){
"use strict";
do{
    function __func(){};
}while(0);

});

 }
});

