// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: filterFn tries to delete elements from the typed array
includes: [TypedArrayHelper.js]
---*/

var superArrayIndex = 0;
var array = [ 2, 4, 8, 16, 32, 64, 127 ];
var arrayIndex = -1;
function filterFn(value, index, obj) {
    arrayIndex = (arrayIndex + 1) % array.length;
    if (value !== array[arrayIndex]) {
        $ERROR("Value mismatch in filterFn at index " + index + " for " + obj[Symbol.toStringTag] + ". Actual : " + value + ". Expected : " + array[arrayIndex]);
    }
    if (index !== arrayIndex) {
        $ERROR("Index mismatch in filterFn for " + obj[Symbol.toStringTag] + ". Actual : " + index + ". Expected : " + arrayIndex);
    }

    if (index == 0) {
        delete typedArrays[superArrayIndex++];
    }

    return index % 2 == 0;
}

var filteredArrays = [];
var j = 0;
var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    filteredArrays[filteredArrays.length] = typedArrays[i].filter(filterFn);
}

if (filteredArrays.length != typedArrays.length) {
    $ERROR("Length mismatch. Filtered Array : " + FilteredArray.length + ". Typed Array : " + typedArrays.length);
}

for (i = 0; i < typedArrays.length; i++) {
    if (typedArrays[i] !== undefined) {
        $ERROR("Delete didn't happen as expected. Typed array : " + typedArrays[i] + ". Expected : undefined");
    }
    for (j = 0; j < array.length / 2; j++) {
        if (array[j * 2] !== filteredArrays[i][j]) {
            $ERROR("Element mismatch for Filtered array. Actual : " + filteredArrays[i][j] + ". Expected : " + array[j * 2]);
        }
    }
}
