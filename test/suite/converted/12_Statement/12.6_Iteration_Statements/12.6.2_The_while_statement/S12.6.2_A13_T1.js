// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * FunctionDeclaration within a "while" Statement is not allowed
 *
 * @id: S12.6.2_A13_T1;
 * @section: 12.6.2;
 * @description: Checking if declaring a function within a "while" Statement leads to an exception;
 * @negative;
 */

while(0){
    function __func(){};
};

