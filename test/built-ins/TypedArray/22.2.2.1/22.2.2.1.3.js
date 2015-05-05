// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Calling from with a valid map function without thisArg
includes: [TypedArrayHelper.js]
---*/

//


var array = [ 0, 2, 4, 8, 16, 32, 64, 127 ];
var j = 0;
var globalThis = this;
function mapFn(value, index) {
    if (value !== array[j]) {
        $ERROR("From mapFn Element mismatch for index " + j + ". Actual : " + value + ", Expected : " + array[j]);
    }

    if (globalThis !== this) {
        $ERROR("Wrong this value is passed to mapFn for index " + j + ". Actual : " + this + ", Expected : " + globalThis);
    }

    j = (j + 1) % array.length;

    return value;
}
var typedArrays = CreateTypedArraysFromMapFn(array, mapFn);
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
