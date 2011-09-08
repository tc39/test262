// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The length property of parseFloat is 1
 *
 * @section: 15.1.2.3;
 * @path: 15_Native/15.1_The_Global_Object/15.1.2_Function_Properties_of_the_Global_Object/15.1.2.3_parseFloat/S15.1.2.3_A7.4.js;
 * @description: parseFloat.length === 1;
 */

//CHECK#1
if (parseFloat.length !== 1) {
  $ERROR('#1: parseFloat.length === 1. Actual: ' + (parseFloat.length));
} 


