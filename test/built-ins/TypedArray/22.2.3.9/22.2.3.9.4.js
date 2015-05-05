// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Elements are updated before they are consumed by filter method
includes: [TypedArrayHelper.js]
---*/

var array = [ 1, 2, 4, 8, 16, 32, 64, 127 ];

var arrayIndex = -1;
function filterFn(value, index, obj) {
    arrayIndex = (arrayIndex + 1) % array.length;
    obj[index + 1] = 127;

    if (value !== 127) {
        $ERROR("Value mismatch in filterFn at index " + index + " for " + obj[Symbol.toStringTag] + ". Actual : " + value + ". Expected : 127");
    }
    if (index !== arrayIndex) {
        $ERROR("Index mismatch in filterFn for " + obj[Symbol.toStringTag] + ". Actual : " + index + ". Expected : " + arrayIndex);
    }

    return index % 2 == 0;
}

var filteredArrays = [];
var j = 0;
var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    typedArrays[i][0] = 127;
    filteredArrays[filteredArrays.length] = typedArrays[i].filter(filterFn);
}

for (i = 0; i < typedArrays.length; i++) {
    if (typedArrays[i][Symbol.toStringTag] !== filteredArrays[i][Symbol.toStringTag]) {
        $ERROR("Tag mismatch. Typed array : " + typedArrays[i][Symbol.toStringTag] + ". Filtered array : " + filteredArrays[i][Symbol.toStringTag]);
    }
    if (typedArrays[i].length / 2 !== filteredArrays[i].length) {
        $ERROR("Length mismatch. Typed array : " + typedArrays[i].length + ". Filtered array : " + filteredArrays[i].length);
    }
    for (j = 0; j < filteredArrays[i].length; j++) {
        if (127 !== filteredArrays[i][j]) {
            $ERROR("Element mismatch for Filtered array. Actual : " + filteredArrays[i][j] + ". Expected : 127");
        }
    }
}
