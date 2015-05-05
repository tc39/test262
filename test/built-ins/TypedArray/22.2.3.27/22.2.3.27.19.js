// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: create the entire array as subarray
includes: [TypedArrayHelper.js]
---*/

array = [ 2, 4, 8, 16, 32, 64, 127 ];
typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    var nextIndex = (i + 1) % typedArrays.length;
    var output = typedArrays[i].subarray.call(typedArrays[nextIndex]);
    if (output[Symbol.toStringTag] !== typedArrays[nextIndex][Symbol.toStringTag]) {
        $ERROR("subarray returned the wrong typed array type. Actual : " + output[Symbol.toStringTag] + ". Expected : " + typedArrays[nextIndex][Symbol.toStringTag]);
    }
    if (output.length !== typedArrays[i].length) {
        $ERROR("subarray returned the wrong length for the output array. Actual : " + output.length + ". Expected : " + typedArrays[i].length);
    }
    for (j = 0; j < array.length; j++) {
        if (array[j] != output[j]) {
            $ERROR("subarray has a wrong value at index " + j + " for the type " + output[Symbol.toStringTag] + ". Actual : " + output[j] + ". Expected : " + array[j]);
        }
    }
}
