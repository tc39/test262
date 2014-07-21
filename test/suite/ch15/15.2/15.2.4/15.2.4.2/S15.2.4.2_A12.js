// Copyright 2011 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: If the this value is undefined, return "[object Undefined]".
---*/

if (Object.prototype.toString.call(undefined) !== "[object Undefined]") {
  $ERROR('If the this value is undefined, return "[object Undefined]".');
}
