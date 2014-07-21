// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "Literal :: NullLiteral"
description: Check null === null
---*/

//CHECK#1
if (null !== null) {
  $ERROR('#1: null === null');
}
