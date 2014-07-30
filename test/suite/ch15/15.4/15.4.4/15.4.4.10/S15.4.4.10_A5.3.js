// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The length property of slice has the attribute ReadOnly
es5id: 15.4.4.10_A5.3
description: Checking if varying the length property fails
flags: [noStrict]
---*/

//CHECK#1
var x = Array.prototype.slice.length;
Array.prototype.slice.length = Infinity;
if (Array.prototype.slice.length !== x) {
  $ERROR('#1: x = Array.prototype.slice.length; Array.prototype.slice.length = Infinity; Array.prototypeslice.length === x. Actual: ' + (Array.prototypeslice.length));
}
