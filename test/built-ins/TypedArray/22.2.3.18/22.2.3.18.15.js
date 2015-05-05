// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: mapFn assigns a new array to the typedArray
includes: [TypedArrayHelper.js]
---*/

var i = 0;
var array = [ 2, 4, 8, 16, 32, 64, 127 ];
var arrayIndex = -1;
function mapFn(value, index, obj) {
    arrayIndex = (arrayIndex + 1) % array.length;
    if (value !== array[arrayIndex]) {
        $ERROR("Value mismatch in mapFn at index " + index + " for " + obj[Symbol.toStringTag] + ". Actual : " + value + ". Expected : " + array[arrayIndex]);
    }
    if (index !== arrayIndex) {
        $ERROR("Index mismatch in mapFn for " + obj[Symbol.toStringTag] + ". Actual : " + index + ". Expected : " + arrayIndex);
    }

    typedArrays[i] = [ 2, 4, 8, 16, 32, 64, 127 ];
    return 127;
}

var mappedArrays = [];
var j = 0;
var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    mappedArrays[mappedArrays.length] = typedArrays[i].map(mapFn);
}

for (i = 0; i < typedArrays.length; i++) {
    if (typedArrays[i].length !== mappedArrays[i].length) {
        $ERROR("Length mismatch. Typed array : " + typedArrays[i].length + ". Mapped array : " + mappedArrays[i].length);
    }
    for (j = 0; j < typedArrays[i].length; j++) {
        if (127 !== mappedArrays[i][j]) {
            $ERROR("Element mismatch for mapped array at indices " + i + " and " + j + ". Actual : " + mappedArrays[i][j] + ". Expected : 127");
        }
    }
}
