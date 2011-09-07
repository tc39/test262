// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Function declaration within an "if" statement in strict code is not allowed
 *
 * @id: S12.5_A9_T1;
 * @section: 12.5;
 * @description: Declaring function within an "if" statement;
 * @negative: SyntaxError;
 */

"use strict";
if (true) {
    function __func(){};
} else {
    function __func(){};
}

