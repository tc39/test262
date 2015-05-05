// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Calling from with a valid map function without thisArg
---*/

//

var array = [ 0, 1, -2, 4, -8, 16, -32, 64, -128, 256, -512, 1024 ];
var arrayIndex = -1;
var globalThis = this;
function mapFn(value, k) {
    arrayIndex++;
    if (value !== array[arrayIndex]) {
        $ERROR("From mapFn Element mismatch for index " + arrayIndex + ". Actual : " + value + ", Expected : " + array[arrayIndex]);
    }
    if (k !== arrayIndex) {
        $ERROR("From mapFn index mismatch for " + arrayIndex + ". Actual : " + k + ", Expected : " + arrayIndex);
    }
    if (globalThis !== this) {
        $ERROR("Wrong this value is passed to mapFn for index " + arrayIndex + ". Actual : " + this + ", Expected : " + globalThis);
    }

    return value;
}
var a = Array.from(array, mapFn);
for (j = 0; j < array.length; j++) {
    if (array[j] != a[j]) {
        $ERROR("Elements mismatch at " + j + ". Actual : " + a[j] + ", Expected : " + array[j]);
    }
}
