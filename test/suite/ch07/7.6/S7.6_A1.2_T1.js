// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "IdentifierStart :: $"
description: Create variable $
---*/

//CHECK#1
var $ = 1;
if ($ !== 1) {
  $ERROR('#1: var $ = 1; $ === 1. Actual: ' + ($));
}
