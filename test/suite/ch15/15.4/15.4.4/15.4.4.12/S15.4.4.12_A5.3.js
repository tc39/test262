// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The length property of splice has the attribute ReadOnly
es5id: 15.4.4.12_A5.3
description: Checking if varying the length property fails
flags: [noStrict]
---*/

//CHECK#1
var x = Array.prototype.splice.length;
Array.prototype.splice.length = Infinity;
if (Array.prototype.splice.length !== x) {
  $ERROR('#1: x = Array.prototype.splice.length; Array.prototype.splice.length = Infinity; Array.prototype.splice.length === x. Actual: ' + (Array.prototype.splice.length));
}
