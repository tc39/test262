// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The length property of isFinite is 1
 *
 * @section: 15.1.2.5;
 * @path: 15_Native/15.1_The_Global_Object/15.1.2_Function_Properties_of_the_Global_Object/15.1.2.5_isFinite/S15.1.2.5_A2.4.js;
 * @description: isFinite.length === 1;
 */

//CHECK#1
if (isFinite.length !== 1) {
  $ERROR('#1: isFinite.length === 1. Actual: ' + (isFinite.length));
} 


