// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Comparison between binary and octal literals
---*/

if (0b0 !== 0O0) {
    $ERROR("Comparison failed for 0b0 !== 0O0");
}
if (0b01 !== 0o1) {
    $ERROR("Comparison failed for 0b01 !== 0o1");
}
if (0b01000 !== 0O10) {
    $ERROR("Comparison failed for 0b01000 !== 0O10");
}
if (0o756 !== 0b111101110) {
    $ERROR("Comparison failed for 0b756 !== 111101110");
}
if (0O1000 === 0B1000000000) {
} else {
    $ERROR("Comparison failed for 0O1000 === 0B1000000000");
}
if (0O1000 !== 512) {
    $ERROR("Comparison failed for 0O1000 !== 512");
}
if (0b1000000000 !== 512) {
    $ERROR("Comparison failed for 0b1000000000 !== 512");
}
if (0o756 !== 494) {
    $ERROR("Comparison failed for 0o756 !== 494");
}
if (0b111101110 !== 494) {
    $ERROR("Comparison failed for 0b111101110 !== 494");
}
if (0o756 !== 494.0) {
    $ERROR("Comparison failed for 0o756 !== 494.0");
}
if (0b111101110 !== 494.0) {
    $ERROR("Comparison failed for 0b111101110 !== 494.0");
}
if (0O1000 !== 0x200) {
    $ERROR("Comparison failed for 0O1000 !== 0x200");
}
if (0b111111111 !== 0x1FF) {
    $ERROR("Comparison failed for 0b111111111 !== 0x1FF");
}
