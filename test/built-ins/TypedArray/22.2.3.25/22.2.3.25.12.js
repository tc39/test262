// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Some is called by passing null for thisArg
includes: [TypedArrayHelper.js]
---*/

var array = [ 2, 4, 8, 16, 32, 64, 127 ];
var arrayIndex = -1;
var callbackObj = {
    arrayIndex : -1,
    callbackFn(value, index, obj) {
        this.arrayIndex = (this.arrayIndex + 1) % array.length;
        if (value !== array[this.arrayIndex]) {
            $ERROR("Value mismatch in callbackFn at index " + index + " for " + obj[Symbol.toStringTag] + ". Actual : " + value + ". Expected : " + array[this.arrayIndex]);
        }
        if (index !== this.arrayIndex) {
            $ERROR("Index mismatch in callbackFn for " + obj[Symbol.toStringTag] + ". Actual : " + index + ". Expected : " + this.arrayIndex);
        }

        return false;
    }
}

var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    if (typedArrays[i].some(callbackObj.callbackFn, null)) {
        $ERROR("Some was expected to return false but returned true for " + typedArrays[i][Symbol.toStringTag]);
    }
}
