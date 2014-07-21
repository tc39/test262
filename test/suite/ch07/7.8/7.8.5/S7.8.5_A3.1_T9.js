// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "RegularExpressionFlags :: IdentifierPart"
description: "IdentifierPart :: \\u006D (m)"
---*/

//CHECK#1
var regexp;
eval("regexp = /(?:)/\u006D");
if (regexp.multiline !== true) {
  $ERROR('#1: var regexp = /(?:)/\\u006D; regexp.multiline === true. Actual: ' + (regexp.multiline));
}
