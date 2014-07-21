// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The length property of isNaN is 1
description: isNaN.length === 1
---*/

//CHECK#1
if (isNaN.length !== 1) {
  $ERROR('#1: isNaN.length === 1. Actual: ' + (isNaN.length));
}
