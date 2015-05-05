// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    If endIndex < startIndex then endIndex is made the same as
    startIndex
includes: [TypedArrayHelper.js]
---*/

var array = [ 2, 4, 8, 16, 32, 64, 127 ];
var expectedOffsets = [6, 6, 12, 12, 24, 24, 24, 48, 6];
var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    var output = typedArrays[i].subarray(6, 2);

    if (output[Symbol.toStringTag] !== typedArrays[i][Symbol.toStringTag]) {
        $ERROR("subarray returned the wrong typed array type. Actual : " + output[Symbol.toStringTag] + ". Expected : " + typedArrays[i][Symbol.toStringTag]);
    }
    if (output.length !== 0) {
        $ERROR("subarray returned the wrong length for the output array. Actual : " + output.length + ". Expected : 0");
    }
    if (output.byteOffset !== expectedOffsets[i]) {
        $ERROR("subarray has the wrong offset for " + output[Symbol.toStringTag] + ". Actual : " + output.length + ". Expected : 0");
    }
    if (output.buffer !== typedArrays[i].buffer) {
        $ERROR("subarray has the wrong buffer for " + output[Symbol.toStringTag]);
    }
}
