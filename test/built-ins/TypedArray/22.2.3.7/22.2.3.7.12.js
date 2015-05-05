// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: every is called by passing null for thisArg
includes: [TypedArrayHelper.js]
---*/

var array = [ 2, 4, 8, 16, 32, 64, 127 ];
var arrayIndex = -1;
var callbackObj = {
    arrayIndex : -1,
    callbackFn(value, index, obj) {
        arrayIndex = (arrayIndex + 1) % array.length;
        if (value !== array[arrayIndex]) {
            $ERROR("Value mismatch in callbackFn at index " + index + " for " + obj[Symbol.toStringTag] + ". Actual : " + value + ". Expected : " + array[arrayIndex]);
        }
        if (index !== arrayIndex) {
            $ERROR("Index mismatch in callbackFn for " + obj[Symbol.toStringTag] + ". Actual : " + index + ". Expected : " + arrayIndex);
        }

        return true;
    }
}

var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    if (!typedArrays[i].every(callbackObj.callbackFn, null)) {
        $ERROR("Every was expected to return true but returned false for " + typedArrays[i][Symbol.toStringTag]);
    }
}
