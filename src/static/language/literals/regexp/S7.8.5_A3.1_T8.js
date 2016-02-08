// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "RegularExpressionFlags :: IdentifierPart"
es5id: 7.8.5_A3.1_T8
description: "IdentifierPart :: \\u0069 (i)"
---*/

//CHECK#1
var regexp;
eval("regexp = /(?:)/\u0069"); 
if (regexp.ignoreCase !== true) {
  $ERROR('#1: var regexp = /(?:)/\\u0069; regexp.ignoreCase === true. Actual: ' + (regexp.ignoreCase));
}
