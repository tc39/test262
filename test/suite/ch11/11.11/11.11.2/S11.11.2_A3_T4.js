// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: If ToBoolean(x) is false, return y
description: Type(x) or Type(y) is changed between null and undefined
---*/

//CHECK#1
if ((false || undefined) !== undefined) {
  $ERROR('#1: (false || undefined) === undefined');
}

//CHECK#2
if ((false || null) !== null) {
  $ERROR('#2: (false || null) === null');
}
