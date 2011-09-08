// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Number.MAX_VALUE is ReadOnly
 *
 * @section: 15.7.3.2;
 * @path: 15_Native/15.7_Number_Objects/15.7.3_Properties_of_Number_Constructor/15.7.3.2_Number.MAX_VALUE/S15.7.3.2_A2.js;
 * @description: Checking if varying Number.MAX_VALUE fails;
 */

// CHECK#1
var x = Number.MAX_VALUE;
Number.MAX_VALUE = 1;
if (Number.MAX_VALUE !== x) {
  $ERROR('#1: x = Number.MAX_VALUE; Number.MAX_VALUE = 1; Number.MAX_VALUE === x');
}

