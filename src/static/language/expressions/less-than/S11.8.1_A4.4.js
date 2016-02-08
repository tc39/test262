// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: If x and y are +0 and -0, return false
es5id: 11.8.1_A4.4
description: Checking all combinations
---*/

//CHECK#1
if ((0 < 0) !== false) {
  $ERROR('#1: (0 < 0) === false');
}

//CHECK#2
if ((-0 < -0) !== false) {
  $ERROR('#2: (-0 < -0) === false');
}

//CHECK#3
if ((+0 < -0) !== false) {
  $ERROR('#3: (+0 < -0) === false');
}

//CHECK#4
if ((-0 < +0) !== false) {
  $ERROR('#4: (-0 < +0) === false');
}
