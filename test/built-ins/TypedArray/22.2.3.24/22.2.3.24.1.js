// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: No start and end parameter specified
includes: [TypedArrayHelper.js]
---*/

var array = [ 2, 4, 8, 16, 32, 64, 127 ];
var j = 0;
var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    var output = typedArrays[i].slice();

    if (output[Symbol.toStringTag] !== typedArrays[i][Symbol.toStringTag]) {
        $ERROR("slice returned the wrong typed array type. Actual : " + output[Symbol.toStringTag] + ". Expected : " + typedArrays[i][Symbol.toStringTag]);
    }
    if (output.length !== typedArrays[i].length) {
        $ERROR("slice returned the wrong length for the output array. Actual : " + output.length + ". Expected : " + typedArrays[i].length);
    }
    for (j = 0; j < array.length; j++) {
        if (array[j] != output[j]) {
            $ERROR("slice has a wrong value at index " + j + " for the type " + output[Symbol.toStringTag] + ". Actual : " + output[j] + ". Expected : " + array[j]);
        }
    }
}
