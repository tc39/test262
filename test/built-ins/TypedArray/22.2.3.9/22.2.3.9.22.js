// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: filterFn returns true for all elements
includes: [TypedArrayHelper.js]
---*/

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

    return true;
}

var filteredArrays = [];
var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    filteredArrays[filteredArrays.length] = typedArrays[i].filter(filterFn);
}

for (i = 0; i < typedArrays.length; i++) {
    if (typedArrays[i][Symbol.toStringTag] !== filteredArrays[i][Symbol.toStringTag]) {
        $ERROR("Tag mismatch. Typed array : " + typedArrays[i][Symbol.toStringTag] + ". Filtered array : " + filteredArrays[i][Symbol.toStringTag]);
    }
    if (typedArrays[i].length !== filteredArrays[i].length) {
        $ERROR("Length mismatch. Typed array : " + typedArrays[i].length + ". Filtered array : " + filteredArrays[i].length);
    }
    for (j = 0; j < filteredArrays[i].length; j++) {
        if (array[j] !== filteredArrays[i][j]) {
            $ERROR("Element mismatch for Filtered array. Actual : " + filteredArrays[i][j] + ". Expected : " + array[j]);
        }
    }
}
