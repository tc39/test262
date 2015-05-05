// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: callbackFn assigns a new array to the typedArray
includes: [TypedArrayHelper.js]
---*/

var i = 0;
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

    typedArrays[i] = [ 1, 2, 4, 8, 16, 32, 64, 127 ];
    return index %2 == 0;
}

var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    typedArrays[i].forEach(callbackFn);
}

for (i = 0; i < typedArrays.length; i++) {
    if (typedArrays[i].length !== array.length) {
        $ERROR("Length mismatch. Typed array : " + typedArrays[i].length + ". Array : " + array.length);
    }
    for (j = 0; j < typedArrays[i].length; j++) {
        if (array[j] !== typedArrays[i][j]) {
            $ERROR("Element mismatch for typed array at index " + i + ". Actual : " + typedArrays[i][j] + ". Expected : " + array[j]);
        }
    }
}
