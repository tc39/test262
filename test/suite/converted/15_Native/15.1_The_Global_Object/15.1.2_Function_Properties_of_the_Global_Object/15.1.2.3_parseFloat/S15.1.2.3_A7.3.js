// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The length property of parseFloat has the attribute ReadOnly
 *
 * @section: 15.1.2.3;
 * @path: 15_Native/15.1_The_Global_Object/15.1.2_Function_Properties_of_the_Global_Object/15.1.2.3_parseFloat/S15.1.2.3_A7.3.js;
 * @description: Checking if varying the length property fails;
 * @strict_only;
 * @strict_mode_negative;
 */

//CHECK#1
var x = parseFloat.length;
parseFloat.length = Infinity;
if (parseFloat.length !== x) {
  $ERROR('#1: x = parseFloat.length; parseFloat.length = Infinity; parseFloat.length === x. Actual: ' + (parseFloat.length));
}


