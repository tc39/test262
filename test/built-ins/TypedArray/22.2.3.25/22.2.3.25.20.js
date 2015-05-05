// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: callbackFn returns true for first element
includes: [TypedArrayHelper.js]
---*/

var superArrayIndex = 0;
var array = [ 2, 4, 8, 16, 32, 64, 127 ];
var arrayIndex = 0;
function callbackFn(value, index, obj) {
    if (value !== array[arrayIndex]) {
        $ERROR("Value mismatch in callbackFn at index " + index + " for " + obj[Symbol.toStringTag] + ". Actual : " + value + ". Expected : " + array[arrayIndex]);
    }

    if (index == 0) {
        return true;
    }

    $ERROR("Code is supposed to reach this line for " + obj[Symbol.toStringTag] + ". Actual : " + index + ". Expected : " + arrayIndex);
    return false;
}

var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    if (!typedArrays[i].some(callbackFn)) {
        $ERROR("Some was expected to return true but returned false for " + typedArrays[i][Symbol.toStringTag]);
    }
}
