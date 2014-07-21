// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "Literal :: BooleanLiteral"
description: "BooleanLiteral :: true"
---*/

//CHECK#1
if (Boolean(true) !== true) {
  $ERROR('#1: Boolean(true) === true. Actual: Boolean(true) === ' + (Boolean(true)));
}
