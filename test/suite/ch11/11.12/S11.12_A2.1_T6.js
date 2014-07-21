// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "Operator x ? y : z uses GetValue"
description: If ToBoolean(x) is false and GetBase(y) is null, return z
---*/

//CHECK#1
var z = new Object();
if ((false ? y : z) !== z) {
  $ERROR('#1: var z = new Object(); (false ? y : z) === z');
}
