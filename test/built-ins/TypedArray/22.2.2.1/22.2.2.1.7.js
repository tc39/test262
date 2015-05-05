// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Passing array Buffer
includes: [TypedArrayHelper.js]
---*/

var arrayBuffer = new ArrayBuffer([ 1, 2, 4, 8, 16, 32, 64, 127 ]);
var typedArrays = CreateTypedArraysFrom(arrayBuffer);
for (i = 0; i < typedArrays.length; i++) {
    if (0 != typedArrays[i].length) {
        $ERROR("Length mismatch for " + typedArrays[i] + ". Actual : " + typedArrays[i].length + ", Expected : 0");
    }
    for (j = 0; j < typedArrays[i].length; j++) {
        WScript.Echo(typedArrays[i][j]);
        if (arrayBuffer[j] != typedArrays[i][j]) {
            $ERROR("Elements mismatch for " + typedArrays[i][Symbol.toStringTag] + " at " + j + ". Actual : " + typedArrays[i][j] + ", Expected : " + arrayBuffer[j]);
        }
    }
}
