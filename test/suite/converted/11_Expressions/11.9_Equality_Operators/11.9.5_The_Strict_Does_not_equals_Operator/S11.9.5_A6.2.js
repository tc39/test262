// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If Type(x) and Type(y) are Null-s, return false
 *
 * @id: S11.9.5_A6.2;
 * @section: 11.9.5, 11.9.6;
 * @description: null === null;
 */

//CHECK#1
if (null !== null) {
  $ERROR('#1: null === null');
}

