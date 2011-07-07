// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.1_A1;
* @section: 12.1;
* @assertion: The production Block { } in strict code can't contain function declaration;
* @description: Trying to declare function at the Block statement;
* @negative 
* @errortype: SyntaxError;
*/

"use strict";
{
    function __func(){}
}
