// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Source is a sparse array
---*/

//

var array = [0, 1, -2, 4, -8, , -32, 64, , 256, -512, 1024];
var globalThis = this;
var arrayIndex = -1;
function mapFn(value, k) {
    arrayIndex++;
    if (value !== array[arrayIndex]) {
        $ERROR("From mapFn Element mismatch for index " + arrayIndex + ". Actual : " + value + ", Expected : " + array[arrayIndex]);
    }
    if (k !== arrayIndex) {
        $ERROR("From mapFn index mismatch for " + j + ". Actual : " + k + ", Expected : " + arrayIndex);
    }
    if (globalThis !== this) {
        $ERROR("Wrong this value is passed to mapFn for index " + arrayIndex + ". Actual : " + this + ", Expected : " + globalThis);
    }

    return value;
}
var a = Array.from(array, mapFn);
for (j = 0; j < a.length; j++) {
    if (array[j] != a[j]) {
        $ERROR("Elements mismatch at " + j + ". Actual : " + a[j] + ", Expected : " + array[j]);
    }
}
