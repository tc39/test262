// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Operator uses floor, abs
 *
 * @id: S9.5_A3.2_T2;
 * @section: 9.5;
 * @description: Use operator ~;
 */

// CHECK#1
if (~1.2345 !== ~1) {
  $ERROR('#1: ~1.2345 === ~1)');
}

// CHECK#2
if (~-5.4321 !== ~-5) {
  $ERROR('#2: ~-5.4321 === ~-5)');
}

