// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The length property of sort has the attribute ReadOnly
description: Checking if varying the length fails
flags: [noStrict]
---*/

//CHECK#1
var x = Array.prototype.sort.length;
Array.prototype.sort.length = Infinity;
if (Array.prototype.sort.length !== x) {
  $ERROR('#1: x = Array.prototype.sort.length; Array.prototype.sort.length = Infinity; Array.prototype.sort.length === x. Actual: ' + (Array.prototype.sort.length));
}
