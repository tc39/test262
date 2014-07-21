// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: RegExp.prototype.test has not prototype property
description: Checking RegExp.prototype.test.prototype
---*/

//CHECK#1
if (RegExp.prototype.test.prototype !== undefined) {
  $ERROR('#1: RegExp.prototype.test.prototype === undefined. Actual: ' + (RegExp.prototype.test.prototype));
}
