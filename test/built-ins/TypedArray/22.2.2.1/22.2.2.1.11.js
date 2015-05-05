// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: this object not a TypedArray
includes: [TypedArrayHelper.js]
---*/

//


function mapFn(value, index) {
    return value;
}

var array = [ 2, 4, 8, 16, 32, 64, 127 ];
var j = 0;
var typedArrays = CreateTypedArrayTypes();
for (i = 0; i < typedArrays.length; i++) {
    var newArray = typedArrays[i].from.call(Array, array);

    if (!Array.isArray(newArray)) {
        $ERROR("Returned object was expected to be of Array type but got " + typeof(newArray) + " instead");
    }
    if (array.length != newArray.length) {
        $ERROR("Length mismatch for the new array. Actual : " + newArray.length + ", Expected : " + array.length);
    }
    for (j = 0; j < typedArrays[i].length; j++) {
        if (array[j] != newArray[j]) {
            $ERROR("Elements mismatch for " + typedArrays[i] + " at " + j + ". Actual : " + newArray[j] + ", Expected : " + array[j]);
        }
    }
}
