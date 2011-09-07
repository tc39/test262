// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Operator x || y uses GetValue
 *
 * @id: S11.11.2_A2.1_T4;
 * @section: 11.11.2, 8.7.1, 16;
 * @description: If ToBoolean(x) is true and GetBase(y) is null, return true;
 */

//CHECK#1
if ((true || x) !== true) {
  $ERROR('#1: (true || x) === true');
}

