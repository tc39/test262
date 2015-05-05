// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Bitwise operators
---*/

var result = 0B111 & 0b101;
if (result !== 5) {
    $ERROR("Result of bitwise and is expected to be 5 for 0B111 & 0b101, but got " + result);
}
result = 0B111 & 0o71;
if (result !== 1) {
    $ERROR("Result of bitwise and is expected to be 1 for 0B111 & 0o71, but got " + result);
}
result = 0O17 & 0o71;
if (result !== 9) {
    $ERROR("Result of bitwise and is expected to be 9 for 0O17 & 0o71, but got " + result);
}

result = 0B111 | 0b101;
if (result !== 7) {
    $ERROR("Result of bitwise or is expected to be 7 for 0B111 | 0b101, but got " + result);
}
result = 0B111 | 0o71;
if (result !== 63) {
    $ERROR("Result of bitwise or is expected to be 63 for 0B111 | 0o71, but got " + result);
}
result = 0O17 | 0o71;
if (result !== 63) {
    $ERROR("Result of bitwise or is expected to be 63 for 0O17 | 0o71, but got " + result);
}

result = 0B111 << 0b10;
if (result !== 28) {
    $ERROR("Result of left shift is expected to be 28 for 0B111 << 0b10, but got " + result);
}
result = 0B111 >> 0o1;
if (result !== 3) {
    $ERROR("Result of bitwise and is expected to be 3 for 0B111 >> 0o1, but got " + result);
}
