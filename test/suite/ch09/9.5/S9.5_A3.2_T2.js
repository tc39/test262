// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator uses floor, abs
description: Use operator ~
---*/

// CHECK#1
if (~1.2345 !== ~1) {
  $ERROR('#1: ~1.2345 === ~1)');
}

// CHECK#2
if (~-5.4321 !== ~-5) {
  $ERROR('#2: ~-5.4321 === ~-5)');
}
