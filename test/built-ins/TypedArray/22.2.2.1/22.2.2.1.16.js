// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: mapFn returns a non-integer
includes: [TypedArrayHelper.js]
---*/

var array = [ 2, 4, 8, 16, 32, 64, 127 ];
var mapObj = {
    arrayIndex : -1,
    mapFn(value, index) {
        this.arrayIndex = (this.arrayIndex + 1) % array.length;
        if (value !== array[this.arrayIndex]) {
            $ERROR("Value mismatch in mapFn at index " + index + ". Actual : " + value + ". Expected : " + array[this.arrayIndex]);
        }
        if (index !== this.arrayIndex) {
            $ERROR("Index mismatch in mapFn. Actual : " + index + ". Expected : " + this.arrayIndex);
        }

        return {
            val : 127,
            get value() {
                return this.val;
            }
        };
    }
}

var typedArrays = [];
var typedArrayTypes = CreateIntegerTypedArrayTypes();
for (i = 0; i < typedArrayTypes.length; i++) {
    typedArrays[typedArrays.length] = typedArrayTypes[i].from(array, mapObj.mapFn, mapObj);
}

for (i = 0; i < typedArrays.length; i++) {
    if (typedArrays[i].length !== array.length) {
        $ERROR("Length mismatch. Typed array : " + array.length + ". Mapped array : " + typedArrays[i].length);
    }
    for (j = 0; j < typedArrays[i].length; j++) {
        if (0 !== typedArrays[i][j]) {
            $ERROR("Element mismatch for mapped array at indices " + i + " and " + j + ". Actual : " + typedArrays[i][j] + ". Expected : 0");
        }
    }
}
