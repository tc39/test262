// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * FunctionDeclaration within a "do-while" Block in strict code is not allowed
 *
 * @path 12_Statement/12.6_Iteration_Statements/12.6.1_The_do_while_Statement/S12.6.1_A13_T2.js
 * @description Declaring a function within a "do-while" loop that is within a strict function
 * @strictOnly
 * @negative SyntaxError
 */

(function(){
"use strict";
do{
    function __func(){};
}while(0);

});

