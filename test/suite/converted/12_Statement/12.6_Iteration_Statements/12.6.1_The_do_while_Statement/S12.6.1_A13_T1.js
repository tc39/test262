// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * FunctionDeclaration within a "do-while" Block in strict code is not allowed
 *
 * @id: S12.6.1_A13_T1;
 * @section: 12.6.1, 13;
 * @description: Declaring function within a "do-while" loop;
 * @negative: SyntaxError;
 */

"use strict";
do{
    function __func(){};
} while(0);

