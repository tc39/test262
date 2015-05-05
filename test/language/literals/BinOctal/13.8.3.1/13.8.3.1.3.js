// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Cases with leaving zeros
---*/

var testArray = [ 0b00, 0b0000000000000000, 0B000000000000000000001, 0B000000000100000000, 0o00, 0o000000000000000000, 0o0000000000000000000007, 0o00000000000000001700000 ];
var expectedArray = [ 0, 0, 1,  256, 0, 0, 7, 491520];

for (i = 0; i < testArray.length; i++) {
    if (testArray[i] !== expectedArray[i]) {
        $ERROR("Value mismatch at index " + i);
    }
}
