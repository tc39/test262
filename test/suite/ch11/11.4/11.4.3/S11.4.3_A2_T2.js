// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator "typeof" uses GetValue
description: If GetBase(x) is null, return "undefined"
---*/

//CHECK#1
if (typeof x !== "undefined") {
  $ERROR('#1: typeof x === "undefined". Actual: ' + (typeof x));
}
