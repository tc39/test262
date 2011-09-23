// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If the eval function is called with some argument, then use a first argument
 *
 * @path 15_Native/15.1_The_Global_Object/15.1.2_Function_Properties_of_the_Global_Object/15.1.2.1_eval/S15.1.2.1_A1.2_T1.js
 * @description eval("x = 1", "x = 2"), x equal 1, not 2
 */

//CHECK#1
var x;
eval("x = 1", "x = 2");
if (x !== 1) {
  $ERROR('#1: eval("x = 1", "x = 2"); x === 1. Actual: ' + (x));
}

