// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Math.PI is approximately 3.1415926535897932
 *
 * @section 15.8.1.6
 * @path 15_Native/15.8_The_Math_Object/15.8.1_Value_Properties_of_the_Math_Object/15.8.1.6_PI/S15.8.1.6_A1.js
 * @description Comparing Math.PI with 3.1415926535897932
 */

$INCLUDE("math_precision.js");
$INCLUDE("math_isequal.js");

// CHECK#1
if (!isEqual(Math.PI, 3.1415926535897932)) {
  $ERROR('#1: \'Math.PI is not approximatley equal to 3.1415926535897932\'');
}


