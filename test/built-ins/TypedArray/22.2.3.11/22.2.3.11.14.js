// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: predicate is attached to the TypedArray itself
includes: [TypedArrayHelper.js]
---*/

var array = [ 2, 4, 8, 16, 32, 64, 127 ];

var mappedArrays = [];
var j = 0;
var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    var j = 0;
    typedArrays[i].predicate = function(value, index, obj) {
        if (value !== array[j]) {
            $ERROR("Value mismatch in predicate at index " + index + " for " + obj[Symbol.toStringTag] + ". Actual : " + value + ". Expected : " + array[j]);
        }
        if (index !== j) {
            $ERROR("Index mismatch in predicate for " + obj[Symbol.toStringTag] + ". Actual : " + index + ". Expected : " + j);
        }

        j++
        return false;
    };

    var output = typedArrays[i].findIndex(typedArrays[i].predicate , typedArrays[i]);
    if (output !== -1) {
        $ERROR("findIndex was expected to return -1 but returned " + output + " for " + typedArrays[i][Symbol.toStringTag]);
    }
}
