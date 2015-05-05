// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Calling from with a valid map function with thisArg
includes: [TypedArrayHelper.js]
---*/

//


var array = [ 0, 2, 4, 8, 16, 32, 64, 127 ];
var j = 0;
var obj = {
    mapFn (value, index) {
        if (value != array[j]) {
            $ERROR("In obj.mapFn element mismatch for index " + j + " in the mapFn. Actual : " + value + ", Expected : " + array[j]);
        }

        if (this !== obj) {
            $ERROR("Wrong this value is passed to mapFn for index " + j + ". Actual : " + value + ", Expected : " + array[j]);
        }

        j = (j + 1) % array.length;

        return value;
    }
}
var typedArrays = CreateTypedArraysFromThisObj(array, obj.mapFn, obj);
for (i = 0; i < typedArrays.length; i++) {
    if (array.length != typedArrays[i].length) {
        $ERROR("Length mismatch for " + typedArrays[i][Symbol.toStringTag] + ". Actual : " + typedArrays[i].length + ", Expected : " + array.length);
    }
    for (j = 0; j < typedArrays[i].length; j++) {
        if (array[j] != typedArrays[i][j]) {
            $ERROR("Elements mismatch for " + typedArrays[i][Symbol.toStringTag] + " at " + j + ". Actual : " + typedArrays[i][j] + ", Expected : " + array[j]);
        }
    }
}
