// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The value of the [[Class]] property is "Function"
 *
 * @id: S15.3.5_A1_T2;
 * @section: 15.3.5;
 * @description: For testing use variable f = Function();
 */

var f = Function();

if (Object.prototype.toString.call(f) !== "[object Function]") {
  $ERROR('#1: The value of the [[Class]] property is "Function"');
}


