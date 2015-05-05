// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: callbackFn is attached to the TypedArray itself
includes: [TypedArrayHelper.js]
---*/

var array = [ 2, 4, 8, 16, 32, 64, 127 ];

var mappedArrays = [];
var j = 0;
var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    var j = 0;
    typedArrays[i].callbackFn = function(value, index, obj) {
        if (value !== array[j]) {
            $ERROR("Value mismatch in callbackFn at index " + index + " for " + obj[Symbol.toStringTag] + ". Actual : " + value + ". Expected : " + array[j]);
        }
        if (index !== j) {
            $ERROR("Index mismatch in callbackFn for " + obj[Symbol.toStringTag] + ". Actual : " + index + ". Expected : " + j);
        }

        j++
        return false;
    };

    if (typedArrays[i].some(typedArrays[i].callbackFn , typedArrays[i])) {
        $ERROR("Every was expected to return false but returned true for " + typedArrays[i][Symbol.toStringTag]);
    }
}
