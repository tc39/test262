// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    Return the string consisting of the single digit of s,
    followed by lowercase character 'e', followed by a plus sign '+' or minus
    sign '-' according to whether n-1 is positive or negative, followed by the
    decimal representation of the integer abs(n-1) (with no leading zeros)
es5id: 9.8.1_A9_T1
description: Various big numbers convert to String by explicit transformation
---*/

// CHECK#1
assert.sameValue(String(1000000000000000000000), "1e+21", '#1: String(1000000000000000000000) === "1e+21"');

// CHECK#2
assert.sameValue(String(10000000000000000000000), "1e+22", '#2: String(10000000000000000000000) === "1e+22"');

// CHECK#3
assert.sameValue(String(1e21), "1e+21", '#3: String(1e21) === "1e+21"');

// CHECK#4
assert.sameValue(String(1.0e22), "1e+22", '#4: String(1.0e22) === "1e+22"');

// CHECK#5
assert.sameValue(String(1E21), "1e+21", '#5: String(1E21) === "1e+21"');

// CHECK#6
assert.sameValue(String(1.0E22), "1e+22", '#6: String(1.0E22) === "1e+22"');

// CHECK#7
assert.sameValue(String(-1000000000000000000000), "-1e+21", '#7: String(-1000000000000000000000) === "-1e+21"');

// CHECK#8
assert.sameValue(String(-10000000000000000000000), "-1e+22", '#8: String(-10000000000000000000000) === "-1e+22"');

// CHECK#9
assert.sameValue(String(-1e21), "-1e+21", '#9: String(-1e21) === "-1e+21"');

// CHECK#10
assert.sameValue(String(-1.0e22), "-1e+22", '#10: String(-1.0e22) === "-1e+22"');

// CHECK#11
assert.sameValue(String(-1E21), "-1e+21", '#11: String(-1E21) === "-1e+21"');

// CHECK#12
assert.sameValue(String(-1.0E22), "-1e+22", '#12: String(-1.0E22) === "-1e+22"');
