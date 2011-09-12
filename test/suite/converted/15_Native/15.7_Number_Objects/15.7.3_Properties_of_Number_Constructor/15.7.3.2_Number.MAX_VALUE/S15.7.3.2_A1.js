// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Number.MAX_VALUE is approximately 1.7976931348623157e308
 *
 * @section 15.7.3.2
 * @path 15_Native/15.7_Number_Objects/15.7.3_Properties_of_Number_Constructor/15.7.3.2_Number.MAX_VALUE/S15.7.3.2_A1.js
 * @description Checking Number.MAX_VALUE value
 */

$INCLUDE("math_precision.js");
$INCLUDE("math_isequal.js");

// CHECK#1
if (!isEqual(Number.MAX_VALUE, 1.7976931348623157e308)) {
  $ERROR('#1: Number.MAX_VALUE approximately equal to 1.7976931348623157e308');
}

