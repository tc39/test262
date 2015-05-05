// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Elements are updated before they are consumed by map method
includes: [TypedArrayHelper.js]
---*/

var array = [ 2, 4, 8, 16, 32, 64, 127 ];

var arrayIndex = -1;
function mapFn(value, index, obj) {
    arrayIndex = (arrayIndex + 1) % array.length;
    obj[index + 1] = 127;

    if (value !== 127) {
        $ERROR("Value mismatch in mapFn at index " + index + " for " + obj[Symbol.toStringTag] + ". Actual : " + value + ". Expected : 127");
    }
    if (index !== arrayIndex) {
        $ERROR("Index mismatch in mapFn for " + obj[Symbol.toStringTag] + ". Actual : " + index + ". Expected : " + arrayIndex);
    }

    return 127;
}

var mappedArrays = [];
var j = 0;
var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    typedArrays[i][0] = 127;
    mappedArrays[mappedArrays.length] = typedArrays[i].map(mapFn);
}

for (i = 0; i < typedArrays.length; i++) {
    if (typedArrays[i][Symbol.toStringTag] !== mappedArrays[i][Symbol.toStringTag]) {
        $ERROR("Tag mismatch. Typed array : " + typedArrays[i][Symbol.toStringTag] + ". Mapped array : " + mappedArrays[i][Symbol.toStringTag]);
    }
    if (typedArrays[i].length !== mappedArrays[i].length) {
        $ERROR("Length mismatch. Typed array : " + typedArrays[i].length + ". Mapped array : " + mappedArrays[i].length);
    }
    for (j = 0; j < typedArrays[i].length; j++) {
        if (127 !== mappedArrays[i][j]) {
            $ERROR("Element mismatch for mapped array. Actual : " + mappedArrays[i][j] + ". Expected : 127");
        }
    }
}
