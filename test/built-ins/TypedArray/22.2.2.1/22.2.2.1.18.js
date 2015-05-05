// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: mapFn assigns a new array to the source
includes: [TypedArrayHelper.js]
---*/

var array = [ 2, 4, 8, 16, 32, 64, 127 ];
var arrayIndex = -1;
function mapFn(value, index) {
    arrayIndex = (arrayIndex + 1) % array.length;
    if (value !== array[arrayIndex]) {
        $ERROR("Value mismatch in mapFn at index " + index + ". Actual : " + value + ". Expected : " + array[arrayIndex]);
    }
    if (index !== arrayIndex) {
        $ERROR("Index mismatch in mapFn. Actual : " + index + ". Expected : " + arrayIndex);
    }

    array = [ 2, 4, 8, 16, 32, 64, 127 ];
    return 127;
}

var typedArrays = [];
var typedArrayTypes = CreateTypedArrayTypes();
for (i = 0; i < typedArrayTypes.length; i++) {
    typedArrays[typedArrays.length] = typedArrayTypes[i].from(array, mapFn);
}

for (i = 0; i < typedArrays.length; i++) {
    if (typedArrays[i].length !== array.length) {
        $ERROR("Length mismatch. Original array : " + array.length + ". Typed array : " + typedArrays[i].length);
    }
    for (j = 0; j < typedArrays[i].length; j++) {
        if (127 !== typedArrays[i][j]) {
            $ERROR("Element mismatch for mapped array at indices " + i + " and " + j + ". Actual : " + typedArrays[i][j] + ". Expected : 127");
        }
    }
}
