// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The length property of toLocaleString has the attribute ReadOnly
description: Checking if varying the length property fails
flags: [noStrict]
---*/

//CHECK#1
var x = Array.prototype.toLocaleString.length;
Array.prototype.toLocaleString.length = Infinity;
if (Array.prototype.toLocaleString.length !== x) {
  $ERROR('#1: x = Array.prototype.toLocaleString.length; Array.prototype.toLocaleString.length = Infinity; Array.prototype.toLocaleString.length === x. Actual: ' + (Array.prototype.toLocaleString.length));
}
