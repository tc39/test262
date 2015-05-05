// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Elements added after the call to every is started will not be
    visited
includes: [TypedArrayHelper.js]
---*/

var array = [ 2, 4, 8, 16, 32, 64, 127 ];
var arrayIndex = -1;
function callbackFn(value, index, obj) {
    arrayIndex = (arrayIndex + 1) % array.length;
    if (value !== array[arrayIndex]) {
        $ERROR("Value mismatch in callbackFn at index " + index + " for " + obj[Symbol.toStringTag] + ". Actual : " + value + ". Expected : " + array[arrayIndex]);
    }
    if (index !== arrayIndex) {
        $ERROR("Index mismatch in callbackFn for " + obj[Symbol.toStringTag] + ". Actual : " + index + ". Expected : " + arrayIndex);
    }
    obj[obj.length] = 2 * arrayIndex + 1;

    if (index >= array.length) {
        return false;
    } else {
        return true;
    }
}

var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    if (!typedArrays[i].every(callbackFn)) {
        $ERROR("Every was expected to return true but returned false for " + typedArrays[i][Symbol.toStringTag]);
    }
}
