// Copyright 2011 Google, Inc.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @path 10_Execution_Contexts/10.4_Establishing_An_Execution_Context/10.4.3_Entering_Function_Code/S10.4.3_A1.js
 * @description When calling a strict anonymous function as a
 * function, "this" should be bound to undefined.
 * @onlyStrict
 */

"use strict";
var that = (function() { return this; })();
if (that !== undefined) {
  $ERROR('#1: "this" leaked as: ' + that);
}

