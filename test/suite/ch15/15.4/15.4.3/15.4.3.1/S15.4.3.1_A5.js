// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The length property of Array.prototype is undefined
es5id: 15.4.3.1_A5
description: Array.prototype.length === undefined
---*/

//CHECK#1
if (Array.prototype.length !== undefined) {
  $ERROR('#1.1: Array.prototype.length === undefined. Actual: ' + (Array.prototype.length));
}
