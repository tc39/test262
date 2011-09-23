// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The length property of eval is 1
 *
 * @path 15_Native/15.1_The_Global_Object/15.1.2_Function_Properties_of_the_Global_Object/15.1.2.1_eval/S15.1.2.1_A4.4.js
 * @description eval.length === 1
 */

//CHECK#1
if (eval.length !== 1) {
  $ERROR('#1: eval.length === 1. Actual: ' + (eval.length));
} 


