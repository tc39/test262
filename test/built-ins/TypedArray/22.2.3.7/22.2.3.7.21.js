// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: callbackFn returns false for first element
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
        return false;
    } else {
        $ERROR("Test case should never come into this statement. Value : " + value + ". Index : " + index + ". Obj : " + obj[Symbol.toStringTag]);
    }

    return true;
}

var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    if (typedArrays[i].every(callbackFn)) {
        $ERROR("Every was expected to return false but returned true for " + typedArrays[i][Symbol.toStringTag]);
    }
}
