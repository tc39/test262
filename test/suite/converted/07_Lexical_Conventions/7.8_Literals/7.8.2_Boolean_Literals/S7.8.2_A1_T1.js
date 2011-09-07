// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Literal :: BooleanLiteral
 *
 * @id: S7.8.2_A1_T1;
 * @section: 7.8.2;
 * @description: BooleanLiteral :: true;
 */

//CHECK#1
if (Boolean(true) !== true) {
  $ERROR('#1: Boolean(true) === true. Actual: Boolean(true) === ' + (Boolean(true)));
} 

