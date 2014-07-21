// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "Literal :: BooleanLiteral"
description: "BooleanLiteral :: false"
---*/

//CHECK#1
if (Boolean(false) !== false) {
  $ERROR('#1: Boolean(false) === false. Actual: Boolean(false) === ' + (Boolean(false)));
}
