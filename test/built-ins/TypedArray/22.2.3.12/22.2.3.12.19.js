// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Pass another typed array as this
includes: [TypedArrayHelper.js]
---*/

var array = [ 1, 2, 4, 8, 16, 32, 64, 127 ];

var arrayIndex = -1;
function callbackFn(value, index, obj) {
    arrayIndex = (arrayIndex + 1) % array.length;
    if (value !== array[arrayIndex]) {
        $ERROR("Value mismatch in callbackFn at index " + index + " for " + obj[Symbol.toStringTag] + ". Actual : " + value + ". Expected : " + array[arrayIndex]);
    }
    if (index !== arrayIndex) {
        $ERROR("Index mismatch in callbackFn for " + obj[Symbol.toStringTag] + ". Actual : " + index + ". Expected : " + arrayIndex);
    }
    obj[obj.length] = 2 * arrayIndex + 1;
}

var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    typedArrays[i].forEach.call(typedArrays[(i + 1) % typedArrays.length], callbackFn);
}

for (i = 0; i < typedArrays.length; i++) {
    if (typedArrays[i].length !== array.length) {
        $ERROR("Length mismatch. Typed array : " + typedArrays[i].length + ". Array : " + array.length);
    }
    for (j = 0; j < typedArrays[i].length; j++) {
        if (array[j] !== typedArrays[i][j]) {
            $ERROR("Element mismatch for typed array " + typedArrays[i][Symbol.toStringTag] + ". Actual : " + typedArrays[i][j] + ". Expected : " + array[j]);
        }
    }
}
