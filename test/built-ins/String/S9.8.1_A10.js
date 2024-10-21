// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    Return the string consisting of the most significant
    digit of the decimal representation of s, followed by a decimal point '.',
    followed by the remaining k-1 digits of the decimal representation of s,
    followed by the lowercase character 'e', followed by a plus sign '+' or
    minus sign '-' according to whether n-1 is positive or negative, followed
    by the decimal representation of the integer abs(n-1) (with no leading zeros)
es5id: 9.8.1_A10
description: Various float numbers convert to String by explicit transformation
---*/

// CHECK#1
assert.sameValue(String(1.2345), "1.2345", '#1: String(1.2345) === "1.2345"');

// CHECK#2
assert.sameValue(String(1.234567890), "1.23456789", '#2: String(1.234567890) === "1.23456789"');

// CHECK#3
assert.sameValue(String(0.12345), "0.12345", '#3: String(0.12345) === "0.12345"');

// CHECK#4
assert.sameValue(String(.012345), "0.012345", '#4: String(.012345) === "0.012345"');

// CHECK#5
assert.sameValue(String(.0012345), "0.0012345", '#5: String(.0012345) === "0.0012345"');

// CHECK#6
assert.sameValue(String(.00012345), "0.00012345", '#6: String(.00012345) === "0.00012345"');

// CHECK#7
assert.sameValue(String(.000012345), "0.000012345", '#7: String(.000012345) === "0.000012345"');

// CHECK#8
assert.sameValue(String(.0000012345), "0.0000012345", '#8: String(.0000012345) === "0.0000012345"');

// CHECK#9
assert.sameValue(String(.00000012345), "1.2345e-7", '#9: String(.00000012345) === "1.2345e-7"');
