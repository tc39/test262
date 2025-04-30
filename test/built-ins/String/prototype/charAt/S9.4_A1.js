// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: If ToNumber(value) is NaN, ToInteger(value) returns +0
es5id: 9.4_A1
description: >
    Check what position is defined by Number.NaN in string "abc":
    "abc".charAt(Number.NaN)
---*/

// CHECK#1
assert.sameValue("abc".charAt(Number.NaN), "a", '#1: "abc".charAt(Number.NaN) === "a"');

// CHECK#2
assert.sameValue("abc".charAt("x"), "a", '#2: "abc".charAt("x") === "a"');
