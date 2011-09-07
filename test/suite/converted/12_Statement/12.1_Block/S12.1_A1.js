// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The production Block { } in strict code can't contain function declaration
 *
 * @id: S12.1_A1;
 * @section: 12.1;
 * @description: Trying to declare function at the Block statement;
 * @negative: SyntaxError;
 */

"use strict";
{
    function __func(){}
}

