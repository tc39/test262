// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Math.LN10 is approximately 2.302585092994046
 *
 * @section 15.8.1.2
 * @path 15_Native/15.8_The_Math_Object/15.8.1_Value_Properties_of_the_Math_Object/15.8.1.2_LN10/S15.8.1.2_A1.js
 * @description Comparing Math.LN10 with 2.302585092994046
 */

$INCLUDE("math_precision.js");
$INCLUDE("math_isequal.js");

// CHECK#1
if (!isEqual(Math.LN10, 2.302585092994046)) {
  $ERROR('#1: \'Math.LN10 is not approximately equal to 2.302585092994046\'');
}

