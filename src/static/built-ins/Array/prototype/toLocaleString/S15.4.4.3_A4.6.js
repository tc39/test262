// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The toLocaleString property of Array has not prototype property
es5id: 15.4.4.3_A4.6
description: Checking Array.prototype.toLocaleString.prototype
---*/

//CHECK#1
if (Array.prototype.toLocaleString.prototype !== undefined) {
  $ERROR('#1: Array.prototype.toLocaleString.prototype === undefined. Actual: ' + (Array.prototype.toLocaleString.prototype));
}
