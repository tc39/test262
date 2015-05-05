// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Passing a valid array
includes: [TypedArrayHelper.js]
---*/

var array = [ 0, 1, 2, 4, 8, 16, 32, 64, 127 ];
var typedArrays = CreateTypedArraysFrom(array);
for (i = 0; i < typedArrays.length; i++) {
    if (array.length != typedArrays[i].length) {
        $ERROR("Length mismatch for " + typedArrays[i] + ". Actual : " + typedArrays[i].length + ", Expected : " + array.length);
    }
    for (j = 0; j < typedArrays[i].length; j++) {
        if (array[j] != typedArrays[i][j]) {
            $ERROR("Elements mismatch for " + typedArrays[i] + " at " + j + ". Actual : " + typedArrays[i][j] + ", Expected : " + array[i]);
        }
    }
}
