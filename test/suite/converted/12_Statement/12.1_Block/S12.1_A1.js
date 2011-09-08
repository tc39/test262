// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The production Block { } in strict code can't contain function declaration
 *
 * @section: 12.1;
 * @path: 12_Statement/12.1_Block/S12.1_A1.js;
 * @description: Trying to declare function at the Block statement;
 * @negative: SyntaxError;
 */

"use strict";
{
    function __func(){}
}

