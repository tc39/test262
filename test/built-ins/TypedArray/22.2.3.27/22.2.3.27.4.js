// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Specifies a negative start
includes: [TypedArrayHelper.js]
---*/

var array = [ 2, 4, 8, 16, 32, 64, 127 ];
var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    var output = typedArrays[i].subarray(-5);

    if (output[Symbol.toStringTag] !== typedArrays[i][Symbol.toStringTag]) {
        $ERROR("subarray returned the wrong typed array type. Actual : " + output[Symbol.toStringTag] + ". Expected : " + typedArrays[i][Symbol.toStringTag]);
    }
    if (output.length !== typedArrays[i].length - 2) {
        $ERROR("subarray returned the wrong length for the output array. Actual : " + output.length + ". Expected : " + typedArrays[i].length  - 2);
    }
    for (j = 0; j < array.length; j++) {
        if (array[j + 2] != output[j]) {
            $ERROR("subarray has a wrong value at index " + j + " for the type " + output[Symbol.toStringTag] + ". Actual : " + output[j] + ". Expected : " + array[j + 2]);
        }
    }
}
