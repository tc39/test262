// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: If x is +0(-0) and y is -0(+0), return true
description: Checking all combinations
---*/

//CHECK#1
if ((+0 == -0) !== true) {
  $ERROR('#1: (+0 == -0) === true');
}

//CHECK#2
if ((-0 == +0) !== true) {
  $ERROR('#2: (-0 == +0) === true');
}
