// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "RegularExpressionFlags :: IdentifierPart"
description: "IdentifierPart :: mig"
---*/

//CHECK#1
var regexp = /(?:)/mig; 
if (regexp.global !== true) {
  $ERROR('#1: var regexp = /(?:)/g; regexp.global === true. Actual: ' + (regexp.global));
}

//CHECK#2 
if (regexp.ignoreCase !== true) {
  $ERROR('#2: var regexp = /(?:)/g; regexp.ignoreCase === true. Actual: ' + (regexp.ignoreCase));
}

//CHECK#3
if (regexp.multiline !== true) {
  $ERROR('#3: var regexp = /(?:)/g; regexp.multiline === true. Actual: ' + (regexp.multiline));
}
