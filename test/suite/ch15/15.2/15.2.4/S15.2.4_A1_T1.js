// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Object prototype object has not prototype
description: Checking if obtaining Object.prototype.prototype fails
---*/

// CHECK#1
if (Object.prototype.prototype !== undefined) {
  $ERROR('#1: Object prototype has not prototype');
}
