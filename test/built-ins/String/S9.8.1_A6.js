// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    If 1 <= s < 1e21 or -1e21 s < -1, return the string
    consisting of the k digits of the decimal representation of s (in order,
    with no leading zeroes), followed by n-k occurrences of the character '0'
es5id: 9.8.1_A6
description: >
    Various integer numbers convert to String by explicit
    transformation
---*/

// CHECK#1
assert.sameValue(String(1), "1", '#1: String(1) === "1"');

// CHECK#2
assert.sameValue(String(10), "10", '#2: String(10) === "10"');

// CHECK#3
assert.sameValue(String(100), "100", '#3: String(100) === "100"');

// CHECK#4
assert.sameValue(String(100000000000000000000), "100000000000000000000", '#4: String(100000000000000000000) === "100000000000000000000"');

// CHECK#5
assert.sameValue(String(1e20), "100000000000000000000", '#5: String(1e20) === "100000000000000000000"');

// CHECK#6
assert.sameValue(String(12345), "12345", '#6: String(12345) === "12345"');

// CHECK#7
assert.sameValue(String(12345000), "12345000", '#7: String(12345000) === "12345000"');

// CHECK#8
assert.sameValue(String(-1), "-1", '#8: String(-1) === "-1"');

// CHECK#9
assert.sameValue(String(-10), "-10", '#9: String(-10) === "-10"');

// CHECK#10
assert.sameValue(String(-100), "-100", '#3: String(-100) === "-100"');

// CHECK#10
assert.sameValue(String(-100000000000000000000), "-100000000000000000000", '#10: String(-100000000000000000000) === "-100000000000000000000"');

// CHECK#11
assert.sameValue(String(-1e20), "-100000000000000000000", '#11: String(-1e20) === "-100000000000000000000"');

// CHECK#12
assert.sameValue(String(-12345), "-12345", '#12: String(-12345) === "-12345"');

// CHECK#13
assert.sameValue(String(-12345000), "-12345000", '#13: String(-12345000) === "-12345000"');

// CHECK#14
assert.sameValue(String(1E20), "100000000000000000000", '#14: String(1E20) === "100000000000000000000"');

// CHECK#15
assert.sameValue(String(-1E20), "-100000000000000000000", '#15: String(-1E20) === "-100000000000000000000"');
