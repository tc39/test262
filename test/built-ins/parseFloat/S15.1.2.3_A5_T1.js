// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Return the number value for the MV of Result(4)
esid: sec-parsefloat-string
description: Checking Infinity
---*/

//CHECK#1
assert.sameValue(parseFloat("Infinity"), Number.POSITIVE_INFINITY, '#1: parseFloat("Infinity") === Number.POSITIVE_INFINITY');

//CHECK#2
assert.sameValue(parseFloat("+Infinity"), Number.POSITIVE_INFINITY, '#2: parseFloat("+Infinity") === Number.POSITIVE_INFINITY');

//CHECK#3
assert.sameValue(parseFloat("-Infinity"), Number.NEGATIVE_INFINITY, '#3: parseFloat("-Infinity") === Number.NEGATIVE_INFINITY');
