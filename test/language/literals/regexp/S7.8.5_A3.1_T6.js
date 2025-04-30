// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "RegularExpressionFlags :: IdentifierPart"
es5id: 7.8.5_A3.1_T6
description: "IdentifierPart :: mig"
---*/

//CHECK#1
var regexp = /(?:)/mig;
assert.sameValue(regexp.global, true, '#1: var regexp = /(?:)/g; regexp.global === true');

//CHECK#2
assert.sameValue(regexp.ignoreCase, true, '#2: var regexp = /(?:)/g; regexp.ignoreCase === true');

//CHECK#3
assert.sameValue(regexp.multiline, true, '#3: var regexp = /(?:)/g; regexp.multiline === true');
