// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: callbackFn is attached to the TypedArray itself
includes: [TypedArrayHelper.js]
---*/

var array = [ 1, 2, 4, 8, 16, 32, 64, 127 ];

var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    var j = 0;
    typedArrays[i].callbackFn = function(value, index, obj) {
        if (value !== array[j]) {
            $ERROR("Value mismatch in callbackFn at index " + index + " for " + obj[Symbol.toStringTag] + ". Actual : " + value + ". Expected : " + array[j]);
        }
        if (index !== j) {
            $ERROR("Index mismatch in callbackFn for " + obj[Symbol.toStringTag] + ". Actual : " + index + ". Expected : " + j);
        }

        j++
        return index % 2 == 0;
    };

    typedArrays[i].forEach(typedArrays[i].callbackFn , typedArrays[i]);
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
