// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: filterFn is attached to the TypedArray itself
includes: [TypedArrayHelper.js]
---*/

var array = [ 1, 2, 4, 8, 16, 32, 64, 127 ];

var filteredArrays = [];
var j = 0;
var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    var j = 0;
    typedArrays[i].filterFn = function(value, index, obj) {
        if (value !== array[j]) {
            $ERROR("Value mismatch in filterFn at index " + index + " for " + obj[Symbol.toStringTag] + ". Actual : " + value + ". Expected : " + array[j]);
        }
        if (index !== j) {
            $ERROR("Index mismatch in filterFn for " + obj[Symbol.toStringTag] + ". Actual : " + index + ". Expected : " + j);
        }

        j++
        return index % 2 == 0;
    };

    filteredArrays[filteredArrays.length] = typedArrays[i].filter(typedArrays[i].filterFn , typedArrays[i]);
}

for (i = 0; i < typedArrays.length; i++) {
    if (typedArrays[i][Symbol.toStringTag] !== filteredArrays[i][Symbol.toStringTag]) {
        $ERROR("Tag mismatch. Typed array : " + typedArrays[i][Symbol.toStringTag] + ". Filtered array : " + filteredArrays[i][Symbol.toStringTag]);
    }
    if (typedArrays[i].length / 2 !== filteredArrays[i].length) {
        $ERROR("Length mismatch. Typed array : " + typedArrays[i].length + ". Filtered array : " + filteredArrays[i].length);
    }
    for (j = 0; j < filteredArrays[i].length; j++) {
        if (array[j * 2] !== filteredArrays[i][j]) {
            $ERROR("Element mismatch for Filtered array. Actual : " + filteredArrays[i][j] + ". Expected : " + array[j * 2]);
        }
    }
}
