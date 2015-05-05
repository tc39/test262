// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: callbackFn returns a non-integer
includes: [TypedArrayHelper.js]
---*/

var array = [ 2, 4, 8, 16, 32, 64, 127 ];

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

        return {
            get value() {
                return index % 2 == 0;
            }
        };
    }
}

var filteredArrays = [];
var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    typedArrays[i].forEach(callbackObj.callbackFn, callbackObj);
}

for (i = 0; i < typedArrays.length; i++) {
    if (typedArrays[i].length !== array.length) {
        $ERROR("Length mismatch. Typed array : " + typedArrays[i].length + ". Array : " + array.length);
    }
    for (j = 0; j < typedArrays[i].length; j++) {
        if (array[j] !== typedArrays[i][j]) {
            $ERROR("Element mismatch for typed array " + typedArrays[i][Symbol.toStringTag] + ". Actual : " + typedArrays[i][j] + ". Expected : " + array[j]);
        }
    }
}
