// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Arithmetic operations on bin and octal literals
---*/

var sum = 0B111 + 0b101;
if (sum !== 12) {
    $ERROR("Sum is expected to be 12, but got " + sum);
}
sum = 0B111 + 0o71;
if (sum !== 64) {
    $ERROR("Sum is expected to be 64, but got " + sum);
}
sum = 0O17 + 0o71;
if (sum !== 72) {
    $ERROR("Sum is expected to be 72, but got " + sum);
}

var diff = 0B111 - 0b101;
if (diff !== 2) {
    $ERROR("diff is expected to be 2, but got " + diff);
}
diff = 0B111 - 0o71;
if (diff !== -50) {
    $ERROR("diff is expected to be -50, but got " + diff);
}
diff = 0O17 - 0o71;
if (diff !== -42) {
    $ERROR("diff is expected to be -42, but got " + diff);
}

var product = 0B111 * 0b101;
if (product !== 35) {
    $ERROR("product is expected to be 35, but got " + product);
}
product = 0B111 * 0o71;
if (product !== 399) {
    $ERROR("product is expected to be 399, but got " + product);
}
product = 0O17 * 0o71;
if (product !== 855) {
    $ERROR("product is expected to be 855, but got " + product);
}

var excl = Math.pow(0b101, 0o4);
if (excl !== 625) {
    $ERROR("Result is expected to be 625 but got " + excl);
}
excl = Math.pow(0b101, 0b10);
if (excl !== 25) {
    $ERROR("Result is expected to be 25 but got " + excl);
}
excl = Math.pow(0o3, 0o3);
if (excl !== 27) {
    $ERROR("Result is expected to be 27 but got " + excl);
}
