// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    Return the string consisting of the single digit of s,
    followed by lowercase character 'e', followed by a plus sign '+' or minus
    sign '-' according to whether n-1 is positive or negative, followed by the
    decimal representation of the integer abs(n-1) (with no leading zeros)
es5id: 9.8.1_A9_T2
description: >
    Various float numbers with many zeros convert to String by
    explicit transformation
---*/

// CHECK#1
assert.sameValue(String(0.0000001), "1e-7", '#1: String(0.0000001) === "1e-7"');

// CHECK#2
assert.sameValue(String(0.000000000100000000000), "1e-10", '#2: String(0.000000000100000000000) === "1e-10"');

// CHECK#3
assert.sameValue(String(1e-7), "1e-7", '#3: String(1e-7) === "1e-7"');

// CHECK#4
assert.sameValue(String(1.0e-10), "1e-10", '#4: String(1.0e-10) === "1e-10"');

// CHECK#5
assert.sameValue(String(1E-7), "1e-7", '#5: String(1E-7) === "1e-7"');

// CHECK#6
assert.sameValue(String(1.0E-10), "1e-10", '#6: String(1.0E-10) === "1e-10"');

// CHECK#7
assert.sameValue(String(-0.0000001), "-1e-7", '#7: String(-0.0000001) === "1e-7"');

// CHECK#8
assert.sameValue(String(-0.000000000100000000000), "-1e-10", '#8: String(-0.000000000100000000000) === "1e-10"');

// CHECK#9
assert.sameValue(String(-1e-7), "-1e-7", '#9: String(-1e-7) === "-1e-7"');

// CHECK#10
assert.sameValue(String(-1.0e-10), "-1e-10", '#10: String(-1.0e-10) === "-1e-10"');

// CHECK#11
assert.sameValue(String(-1E-7), "-1e-7", '#11: String(-1E-7) === "-1e-7"');

// CHECK#12
assert.sameValue(String(-1.0E-10), "-1e-10", '#12: String(-1.0E-10) === "-1e-10"');
