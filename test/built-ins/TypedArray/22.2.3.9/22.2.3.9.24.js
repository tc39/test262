// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: filterFn returns true for only the first element
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

    return index == 0 ? true : false;
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
    if (1 !== filteredArrays[i].length) {
        $ERROR("Length mismatch. Typed array : " + typedArrays[i].length + ". Filtered array : " + filteredArrays[i].length);
    }
    if (array[0] !== filteredArrays[i][0]) {
        $ERROR("Element mismatch for Filtered array. Actual : " + filteredArrays[i][0] + ". Expected : " + array[0]);
    }
}
