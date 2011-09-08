// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Number.NaN is Not-a-Number
 *
 * @section: 15.7.3.4;
 * @path: 15_Native/15.7_Number_Objects/15.7.3_Properties_of_Number_Constructor/15.7.3.4_Number.NaN/S15.7.3.4_A1.js;
 * @description: Checking isNaN(Number.NaN);
 */

// CHECK#1
if (isNaN(Number.NaN) !== true) {
  $ERROR('#1: Number.NaN === Not-a-Number');
}

