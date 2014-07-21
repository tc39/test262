// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Function.prototype.call has not prototype property
description: >
    Checking if obtaining the prototype property of
    Function.prototype.call fails
---*/

//CHECK#1
if (Function.prototype.call.prototype !== undefined) {
  $ERROR('#1: Function.prototype.call has not prototype property'+Function.prototype.call.prototype);
}
