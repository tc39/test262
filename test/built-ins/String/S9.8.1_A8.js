// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    If 1 > s > -1, and -6 < n <= 0, return the string consisting of the
    character '0', followed by a decimal point '.', followed by -n occurrences
    of the character '0', followed by the k digits of the decimal
    representation of s
es5id: 9.8.1_A8
description: Various float numbers convert to String by explicit transformation
---*/

// CHECK#1
assert.sameValue(String(0.1), "0.1", '#1: String(0.1) === "0.1"');

// CHECK#2
assert.sameValue(String(0.000001), "0.000001", '#2: String(0.000001) === "0.000001"');

// CHECK#3
assert.sameValue(String(1e-6), "0.000001", '#3: String(1e-6) === "0.000001"');

// CHECK#4
assert.sameValue(String(1E-6), "0.000001", '#4: String(1E-6) === "0.000001"');

// CHECK#5
assert.sameValue(String(-0.1), "-0.1", '#5: String(-0.1) === "-0.1"');

// CHECK#6
assert.sameValue(String(-0.000001), "-0.000001", '#6: String(-0.000001) === "-0.000001"');

// CHECK#7
assert.sameValue(String(-1e-6), "-0.000001", '#7: String(-1e-6) === "0.000001"');

// CHECK#8
assert.sameValue(String(-1E-6), "-0.000001", '#8: String(-1E-6) === "0.000001"');
