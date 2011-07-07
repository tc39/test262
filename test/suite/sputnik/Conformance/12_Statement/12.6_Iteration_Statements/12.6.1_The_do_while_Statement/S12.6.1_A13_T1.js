// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.6.1_A13_T1;
* @section: 12.6.1, 13;
* @assertion: FunctionDeclaration within a "do-while" Block in strict code is not allowed;
* @description: Declaring function within a "do-while" loop;
* @negative
* @errortype: SyntaxError;
*/

"use strict";
do{
    function __func(){};
} while(0);
