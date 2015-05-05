// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Source array with boundary values
includes: [TypedArrayHelper.js]
---*/

var array = [ Number.MAX_VALUE, Number.MIN_VALUE, Number.NaN, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY ];
var mapObj = {
    arrayIndex : -1,
    mapFn(value, index) {
        this.arrayIndex = (this.arrayIndex + 1) % (array.length);

        if (index != 2) {
            if (value !== array[this.arrayIndex]) {
                $ERROR("Value mismatch in mapFn at index " + index + ". Actual : " + value + ". Expected : " + array[this.arrayIndex]);
            }
        } else {
            if (!isNaN(value)) {
                $ERROR("Value mismatch in mapFn at index " + index + ". Actual : " + value + ". Expected : NaN");
            }
        }
        if (index !== this.arrayIndex) {
            $ERROR("Index mismatch in mapFn for " + obj[Symbol.toStringTag] + ". Actual : " + index + ". Expected : " + this.arrayIndex);
        }

        return array[this.arrayIndex];
    }
}

var typedArrays = [];
var typedArrayTypes = CreateTypedRedcuedSetOfArrayTypes();
for (i = 0; i < typedArrayTypes.length; i++) {
    typedArrays[typedArrays.length] = typedArrayTypes[i].from(array, mapObj.mapFn, mapObj);
}

for (i = 0; i < typedArrays.length; i++) {
    if (typedArrays[i].length !== array.length) {
        $ERROR("Length mismatch. Typed array : " + typedArrays[i].length + ". Actual array : " + array.length);
    }
    for (j = 0; j < typedArrays[i].length; j++) {
        if (j != 2) {
            if (array[j] !== typedArrays[i][j]) {
                $ERROR("Element mismatch for mapped array at indices " + i + " and " + j + ". Actual : " + typedArrays[i][j] + ". Expected : " + array[j]);
            }
        } else {
            if (!isNaN(typedArrays[i][j])) {
                $ERROR("Element mismatch for mapped array at indices " + i + " and " + j + ". Actual : " + typedArrays[i][j] + ". Expected : NaN");
            }
        }
    }
}
