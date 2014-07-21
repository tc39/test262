// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The length property of isFinite is 1
description: isFinite.length === 1
---*/

//CHECK#1
if (isFinite.length !== 1) {
  $ERROR('#1: isFinite.length === 1. Actual: ' + (isFinite.length));
}
