// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: callbackFn returns false
includes: [TypedArrayHelper.js]
---*/

var array = [ 2, 4, 8, 16, 32, 64, 127 ];
var callbackObj = {
    arrayIndex : -1,
    callbackFn(value, index, obj) {
        this.arrayIndex++;
        if (value !== array[this.arrayIndex]) {
            $ERROR("Value mismatch in callbackFn at index " + index + " for " + obj[Symbol.toStringTag] + ". Actual : " + value + ". Expected : " + array[this.arrayIndex]);
        }
        if (index !== this.arrayIndex) {
            $ERROR("Index mismatch in callbackFn for " + obj[Symbol.toStringTag] + ". Actual : " + index + ". Expected : " + this.arrayIndex);
        }

        if (index < array.length / 2) {
            return true;
        } else {
            this.arrayIndex = -1;
            return false;
        }
    }
}

var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    if (typedArrays[i].every(callbackObj.callbackFn, callbackObj)) {
        $ERROR("Every was expected to return false but returned true for " + typedArrays[i][Symbol.toStringTag]);
    }
}
