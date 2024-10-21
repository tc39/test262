// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: If m is NaN, return the string "NaN"
es5id: 9.8.1_A1
description: NaN convert to String by explicit transformation
---*/

// CHECK#1
assert.sameValue(String(NaN), "NaN", '#1: String(NaN) === Not-a-Numbe');

// CHECK#2
assert.sameValue(String(Number.NaN), "NaN", '#2: String(Number.NaN) === Not-a-Numbe');

// CHECK#3
assert.sameValue(String(Number("asasa")), "NaN", '#3: String(Number("asasa")) === Not-a-Numbe');
