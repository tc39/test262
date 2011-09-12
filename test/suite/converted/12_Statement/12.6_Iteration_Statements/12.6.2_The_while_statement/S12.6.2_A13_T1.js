// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * FunctionDeclaration within a "while" Statement is not allowed
 *
 * @section 12.6.2
 * @path 12_Statement/12.6_Iteration_Statements/12.6.2_The_while_statement/S12.6.2_A13_T1.js
 * @description Checking if declaring a function within a "while" Statement leads to an exception
 * @negative
 */

while(0){
    function __func(){};
};

