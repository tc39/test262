// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Basic test for binary literal
---*/

var binArray = [0b0, 0B0, 0b1, 0B1, 0b10, 0B10, 0b11, 0B11, 0b100, 0B100, 0b101, 0B101, 0b110, 0B110, 0b111, 0B111, 0b1000, 0B1000];

for (var i = 0; i < binArray.length; i++) {
    if (binArray[i] !== Math.floor(i / 2)) {
        $ERROR("" + i + "th element " + binArray[i] + " should be equal to " + Math.floor(i / 2));
    }
}
