// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: map is called by passing null for thisArg
includes: [TypedArrayHelper.js]
---*/

var arrayIndex = -1;
var mapObj = {
    mapFn(value, index) {
        arrayIndex = (arrayIndex + 1) % array.length;
        if (value !== array[arrayIndex]) {
            $ERROR("Value mismatch in mapFn at index " + index + ". Actual : " + value + ". Expected : " + array[arrayIndex]);
        }
        if (index !== arrayIndex) {
            $ERROR("Index mismatch in mapFn. Actual : " + index + ". Expected : " + arrayIndex);
        }

        return array[arrayIndex];
    }
}

var typedArrays = [];
var array = [ 2, 4, 8, 16, 32, 64, 127 ];
var typedArrayTypes = CreateTypedArrayTypes(array);
for (i = 0; i < typedArrayTypes.length; i++) {
    typedArrays[typedArrays.length] = typedArrayTypes[i].from(array, mapObj.mapFn, null);

    if (typedArrays[i].length !== array.length) {
        $ERROR("Length mismatch. Typed array : " + typedArrays[i].length + ". Original array : " + array.length);
    }
    for (j = 0; j < typedArrays[i].length; j++) {
        if (array[j] !== typedArrays[i][j]) {
            WScript.Echo("Element mismatch for mapped array. Actual : " + typedArrays[i][j] + ". Expected : " + array[j]);
        }
    }
}
