// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Number.MIN_VALUE is approximately 5e-324
 *
 * @section: 15.7.3.3;
 * @path: 15_Native/15.7_Number_Objects/15.7.3_Properties_of_Number_Constructor/15.7.3.3_Number.MIN_VALUE/S15.7.3.3_A1.js;
 * @description: Checking Number.MIN_VALUE value;
 */

$INCLUDE("math_precision.js");
$INCLUDE("math_isequal.js");

// CHECK#1
if (!isEqual(Number.MIN_VALUE, 5e-324)) {
  $ERROR('#1: Number.MIN_VALUE approximately equal to 5e-324');
}

