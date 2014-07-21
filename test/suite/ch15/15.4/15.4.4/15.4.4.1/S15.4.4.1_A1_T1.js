// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The initial value of Array.prototype.constructor is
    the built-in Array constructor
description: Array.prototype.constructor === Array
---*/

//CHECK#1
if (Array.prototype.constructor !== Array) {
  $ERROR('#1: Array.prototype.constructor === Array. Actual: ' + (Array.prototype.constructor));
}
