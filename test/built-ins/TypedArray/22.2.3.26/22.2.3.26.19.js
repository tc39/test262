// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: callbackFn returns an object
includes: [TypedArrayHelper.js]
---*/

var array = [ 8, 4, 64, 127, 32, 2, 16 ];
var sortedArray = [ 8, 4, 64, 127, 32, 2, 16 ];
var callbackObj = {
    callbackFn(x, y) {
        if (x === y) {
            return { value : 0 };
        } else if (x < y) {
            return { value : -1 };
        }

        return { value : 1 };
    }
}

var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    typedArrays[i].reduce(callbackObj.callbackFn);
    for (j = 0; j < array.length; j++) {
        if (typedArrays[i][j] !== sortedArray[j]) {
            $ERROR("Element mismatch after sort at index " + j + " for " + typedArrays[i][Symbol.toStringTag] + ". Actual : " + typedArrays[i][j] + ". Expected : " + sortedArray[j]);
        }
    }
}
