// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Array with boundary values
includes: [TypedArrayHelper.js]
---*/

var array = [ Number.MAX_VALUE, Number.MIN_VALUE, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY ];
var typedArrays = CreateTypedRedcuedSetOfArrays(array);

for (i = 0; i < typedArrays.length; i++) {
    typedArrays[i].reverse();
}

for (i = 0; i < typedArrays.length; i++) {
    for (j = 0; j < typedArrays[i].length; j++) {
        if (typedArrays[i][j] !== array[array.length - (j + 1)]) {
            $ERROR("Got a wrong value at index " + j + " for " + typedArrays[i][Symbol.toStringTag] + ". Actual : " + typedArrays[i][j] + ". Expected : " + array[array.length - (j + 1)]);
        }
    }
}
