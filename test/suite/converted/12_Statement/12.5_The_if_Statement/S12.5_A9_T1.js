// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Function declaration within an "if" statement in strict code is not allowed
 *
 * @section 12.5
 * @path 12_Statement/12.5_The_if_Statement/S12.5_A9_T1.js
 * @description Declaring function within an "if" statement
 * @negative SyntaxError
 */

"use strict";
if (true) {
    function __func(){};
} else {
    function __func(){};
}

