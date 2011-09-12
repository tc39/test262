// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The value of the [[Class]] property is "Function"
 *
 * @section 15.3.5
 * @path 15_Native/15.3_Function_Objects/15.3.5_Properties_of_Function_Instances/S15.3.5_A1_T2.js
 * @description For testing use variable f = Function()
 */

var f = Function();

if (Object.prototype.toString.call(f) !== "[object Function]") {
  $ERROR('#1: The value of the [[Class]] property is "Function"');
}


