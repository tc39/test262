// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Source array with boundary values
includes: [TypedArrayHelper.js]
---*/

var array = [ Number.MAX_VALUE, Number.MIN_VALUE, Number.NaN, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY ];

var mapObj = {
    arrayIndex : -1,
    mapFn(value, index, obj) {
        this.arrayIndex = (this.arrayIndex + 1) % (array.length);

        if (index != 2 && value !== array[this.arrayIndex]) {
            $ERROR("Value mismatch in mapFn at index " + index + " for " + obj[Symbol.toStringTag] + ". Actual : " + value + ". Expected : " + array[this.arrayIndex]);
        } else if (index == 2 && !isNaN(value)) {
            $ERROR("Value mismatch in mapFn at index " + index + " for " + obj[Symbol.toStringTag] + ". Actual : " + value + ". Expected : NaN");
        }
        if (index !== this.arrayIndex) {
            $ERROR("Index mismatch in mapFn for " + obj[Symbol.toStringTag] + ". Actual : " + index + ". Expected : " + this.arrayIndex);
        }

        return 127;
    }
}

var mappedArrays = [];
var j = 0;
var typedArrays = CreateTypedRedcuedSetOfArrays(array.slice(0, array.length));
for (i = 0; i < typedArrays.length; i++) {
    mappedArrays[mappedArrays.length] = typedArrays[i].map(mapObj.mapFn, mapObj);
}

for (i = 0; i < typedArrays.length; i++) {
    if (typedArrays[i][Symbol.toStringTag] !== mappedArrays[i][Symbol.toStringTag]) {
        $ERROR("Tag mismatch. Typed array : " + typedArrays[i][Symbol.toStringTag] + ". Mapped array : " + mappedArrays[i][Symbol.toStringTag]);
    }
    if (typedArrays[i].length !== mappedArrays[i].length) {
        $ERROR("Length mismatch. Typed array : " + typedArrays[i].length + ". Mapped array : " + mappedArrays[i].length);
    }
    for (j = 0; j < typedArrays[i].length; j++) {
        if (127 !== mappedArrays[i][j]) {
            $ERROR("Element mismatch for mapped array at indices " + i + " and " + j + ". Actual : " + mappedArrays[i][j] + ". Expected : 127");
        }
    }
}
