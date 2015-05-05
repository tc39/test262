// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Elements are updated before they are consumed by map method
includes: [TypedArrayHelper.js]
---*/

var array = [ 127, 4, 8, 16, 32, 64, 127 ];

var arrayIndex = -1;
function callbackFn(value, index, obj) {
    arrayIndex = (arrayIndex + 1) % array.length;
    obj[index + 1] = 127;

    if (value !== 127) {
        $ERROR("Value mismatch in callbackFn at index " + index + " for " + obj[Symbol.toStringTag] + ". Actual : " + value + ". Expected : 127");
    }
    if (index !== arrayIndex) {
        $ERROR("Index mismatch in callbackFn for " + obj[Symbol.toStringTag] + ". Actual : " + index + ". Expected : " + arrayIndex);
    }
}

var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    typedArrays[i][0] = 127;
    typedArrays[i].forEach(callbackFn);
}

for (i = 0; i < typedArrays.length; i++) {
    if (typedArrays[i].length !== array.length) {
        $ERROR("Length mismatch. Typed array : " + typedArrays[i].length + ". Array : " + array.length);
    }
    for (j = 0; j < typedArrays[i].length; j++) {
        if (127 !== typedArrays[i][j]) {
            $ERROR("Element mismatch for typed array " + typedArrays[i][Symbol.toStringTag] + ". Actual : " + forEachedArrays[i][j] + ". Expected : 127");
        }
    }
}
