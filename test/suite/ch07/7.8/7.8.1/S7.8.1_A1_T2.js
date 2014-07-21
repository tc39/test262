// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "Literal :: NullLiteral"
description: Check RegExp("0").exec("1") === null
---*/

//CHECK#1
if (RegExp("0").exec("1") !== null) {
  $ERROR('#1: RegExp("0").exec("1") === null');
}
