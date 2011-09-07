// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If x is +0(-0) and y is -0(+0), return false
 *
 * @id: S11.9.5_A4.2;
 * @section: 11.9.5, 11.9.6;
 * @description: Checking all combinations;
 */

//CHECK#1
if (+0 !== -0) {
  $ERROR('#1: +0 === -0');
}

//CHECK#2
if (-0 !== +0) {
  $ERROR('#2: -0 === +0');
}

