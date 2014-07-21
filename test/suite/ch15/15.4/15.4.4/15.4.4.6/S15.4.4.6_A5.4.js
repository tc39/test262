// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The length property of pop is 0
description: pop.length === 1
---*/

//CHECK#1
if (Array.prototype.pop.length !== 0) {
  $ERROR('#1: Array.prototype.pop.length === 0. Actual: ' + (Array.prototype.pop.length));
}
