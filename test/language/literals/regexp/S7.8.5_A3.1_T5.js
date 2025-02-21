// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "RegularExpressionFlags :: IdentifierPart"
es5id: 7.8.5_A3.1_T5
description: "IdentifierPart :: mg"
---*/

//CHECK#1
var regexp = /(?:)/mg;
assert.sameValue(regexp.global, true, '#1: var regexp = /(?:)/g; regexp.global === true');

//CHECK#2
assert.sameValue(regexp.ignoreCase, false, '#2: var regexp = /(?:)/g; regexp.ignoreCase === false');

//CHECK#3
assert.sameValue(regexp.multiline, true, '#3: var regexp = /(?:)/g; regexp.multiline === true');
