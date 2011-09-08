// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Operator uses floor, abs
 *
 * @section: 9.6;
 * @path: 09_Type_Conversion/9.6_ToUint32/S9.6_A3.2_T1.js;
 * @description: Use operator >>>0;
 */

// CHECK#1
if ((1.2345 >>> 0) !== 1) {
  $ERROR('#1: (1.2345 >>> 0) === 1. Actual: ' + ((1.2345 >>> 0)));
}

// CHECK#2
if ((-5.4321 >>> 0) !== 4294967291) {
  $ERROR('#2: (-5.4321 >>> 0) === 4294967291. Actual: ' + ((-5.4321 >>> 0)));
}

