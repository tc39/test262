// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Elements added after the call to from
includes: [TypedArrayHelper.js]
---*/

//


var array = [2, 4, 8, 16, 32, 64, 127];
var arrayIndex = -1;
var originalLength = 7;
function mapFn(value, index) {
    arrayIndex = (arrayIndex + 1) % originalLength;
    if (value !== array[arrayIndex]) {
        $ERROR("Value mismatch in mapFn at index " + index + ". Actual : " + value + ". Expected : " + array[arrayIndex]);
    }
    if (index !== arrayIndex) {
        $ERROR("Index mismatch in mapFn. Actual : " + index + ". Expected : " + arrayIndex);
    }
    array[array.length] = 2 * arrayIndex + 1;

    return array[arrayIndex];
}

var typedArrays = [];
var typedArrayTypes = CreateTypedArrayTypes();
for (i = 0; i < typedArrayTypes.length; i++) {
    typedArrays[typedArrays.length] = typedArrayTypes[i].from(array, mapFn);
    array.splice(originalLength, array.length / 2);

    if (typedArrays[i].length !== array.length) {
        $ERROR("Length mismatch. Typed array : " + typedArrays[i].length + ". Mapped array : " + typedArrays[i].length);
    }
    for (j = 0; j < typedArrays[i].length; j++) {
        if (array[j] !== typedArrays[i][j]) {
            WScript.Echo("Element mismatch for array at index " + j + ". Actual : " + typedArrays[i][j] + ". Expected : " + array[j]);
        }
    }
}
