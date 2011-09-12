// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Operator use ToNumber
 *
 * @section 15.1.2.2, 9.3
 * @path 15_Native/15.1_The_Global_Object/15.1.2_Function_Properties_of_the_Global_Object/15.1.2.2_parseInt/S15.1.2.2_A3.1_T3.js
 * @description Checking for undefined and null
 */

//CHECK#1
if (parseInt("11", undefined) !== parseInt("11", 10)) {
  $ERROR('#1: parseInt("11", undefined) === parseInt("11", 10). Actual: ' + (parseInt("11", undefined)));
}

//CHECK#2
if (parseInt("11", null) !== parseInt("11", 10)) {
  $ERROR('#2: parseInt("11", null) === parseInt("11", 10). Actual: ' + (parseInt("11", null)));
}

