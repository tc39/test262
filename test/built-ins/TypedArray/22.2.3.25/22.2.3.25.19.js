// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Source array with boundary values
includes: [TypedArrayHelper.js]
---*/

var array = [ Number.MAX_VALUE, Number.MIN_VALUE, Number.NaN, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY ];

var callbackObj = {
    arrayIndex : -1,
    callbackFn(value, index, obj) {
        this.arrayIndex = (this.arrayIndex + 1) % (array.length);

        if (index !== this.arrayIndex) {
            $ERROR("Index mismatch in mapFn for " + obj[Symbol.toStringTag] + ". Actual : " + index + ". Expected : " + this.arrayIndex);
        }

        return false;
    }
}

var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    if (typedArrays[i].some(callbackObj.callbackFn, callbackObj)) {
        $ERROR("Some was expected to return false but returned true for " + typedArrays[i][Symbol.toStringTag]);
    }
}
