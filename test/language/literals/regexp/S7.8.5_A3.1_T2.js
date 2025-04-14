// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "RegularExpressionFlags :: IdentifierPart"
es5id: 7.8.5_A3.1_T2
description: "IdentifierPart :: i"
---*/

//CHECK#1
var regexp = /(?:)/i;
assert.sameValue(regexp.global, false, '#1: var regexp = /(?:)/g; regexp.global === false');

//CHECK#2
assert.sameValue(regexp.ignoreCase, true, '#2: var regexp = /(?:)/g; regexp.ignoreCase === true');

//CHECK#3
assert.sameValue(regexp.multiline, false, '#3: var regexp = /(?:)/g; regexp.multiline === false');
