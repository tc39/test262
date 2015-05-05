// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: mapFn is attached to the TypedArray itself
includes: [TypedArrayHelper.js]
---*/

var array = [ 2, 4, 8, 16, 32, 64, 127 ];
var typedArrays = [];
var typedArraysTypes = CreateTypedArrayTypes();
for (i = 0; i < typedArraysTypes.length; i++) {
    var j = 0;
    typedArraysTypes[i].mapFn = function(value, index) {
        if (arguments.length !== 2) {
            $ERROR("Only two arguments are expected to be pased into the method. But got " + arguments.length);
        }
        if (value !== array[j]) {
            $ERROR("Value mismatch in mapFn at index " + index + ". Actual : " + value + ". Expected : " + array[j]);
        }
        if (index !== j) {
            $ERROR("Index mismatch in mapFn. Actual : " + index + ". Expected : " + j);
        }

        j++
        return 127;
    };

    typedArrays[typedArrays.length] = typedArraysTypes[i].from(array, typedArraysTypes[i].mapFn , typedArrays[i]);
}

for (i = 0; i < typedArrays.length; i++) {
    if (typedArrays[i].length !== array.length) {
        $ERROR("Length mismatch. Typed array : " + array.length + ". Mapped array : " + typedArrays[i].length);
    }
    for (j = 0; j < typedArrays[i].length; j++) {
        if (127 !== typedArrays[i][j]) {
            $ERROR("Element mismatch for mapped array at indices " + i + " and " + j + ". Actual : " + typedArrays[i][j] + ". Expected : 127");
        }
    }
}
