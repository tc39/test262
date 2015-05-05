// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Add elements to the typed array in callbackFn
includes: [TypedArrayHelper.js]
---*/

var array = [ 1, 2, 4, 8, 16, 32, 64, 127 ];
var originalLength = array.length;
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

        Object.defineProperty(obj, (array.length).toString(), {
            enumerable: true,
            configurable: false,
            writable: true,
            value: 127
        });

        if (index < originalLength - 1) {
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
