// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    Compute the longest prefix of Result(2), which might be Result(2) itself,
    which satisfies the syntax of a StrDecimalLiteral
esid: sec-parsefloat-string
description: "\"Infinity\"+\"some string\""
---*/

//CHECK#1
assert.sameValue(parseFloat("Infinity1"), Number.POSITIVE_INFINITY, '#1: parseFloat("Infinity1") === Number.POSITIVE_INFINITY');

//CHECK#2
assert.sameValue(parseFloat("Infinityx"), Number.POSITIVE_INFINITY, '#2: parseFloat("Infinityx") === Number.POSITIVE_INFINITY');

//CHECK#3
assert.sameValue(parseFloat("Infinity+1"), Number.POSITIVE_INFINITY, '#3: parseFloat("Infinity+1") === Number.POSITIVE_INFINITY');
