// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "RegularExpressionFlags :: IdentifierPart"
description: "IdentifierPart :: \\u0067 (g)"
---*/

//CHECK#1
var regexp;
eval("regexp = /(?:)/\u0067"); 
if (regexp.global !== true) {
  $ERROR('#1: var regexp = /(?:)/\\u0067; regexp.global === true. Actual: ' + (regexp.global));
}
