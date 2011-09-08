// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The eval property has not prototype property
 *
 * @section: 15.1.2.1;
 * @path: 15_Native/15.1_The_Global_Object/15.1.2_Function_Properties_of_the_Global_Object/15.1.2.1_eval/S15.1.2.1_A4.6.js;
 * @description: Checking eval.prototype;
 */

//CHECK#1
if (eval.prototype !== undefined) {
  $ERROR('#1: eval.prototype === undefined. Actual: ' + (eval.prototype));
}

