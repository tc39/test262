// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: If m is infinity, return the string "Infinity"
es5id: 9.8.1_A4
description: +/-Infinity convert to String by explicit transformation
---*/

// CHECK#1
assert.sameValue(String(Infinity), "Infinity", '#1: String(Infinity) === "Infinity"');

// CHECK#2
assert.sameValue(String(Number.POSITIVE_INFINITY), "Infinity", '#2: String(Number.POSITIVE_INFINITY) === "Infinity"');

// CHECK#3
assert.sameValue(String(-Infinity), "-Infinity", '#3: String(-Infinity) === "-Infinity"');

// CHECK#4
assert.sameValue(String(Number.NEGATIVE_INFINITY), "-Infinity", '#4: String(Number.NEGATIVE_INFINITY) === "-Infinity"');
