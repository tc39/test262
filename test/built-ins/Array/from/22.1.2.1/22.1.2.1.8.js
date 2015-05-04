// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Elements added after the call to from
---*/

//

var arrayIndex = -1;
var originalLength = 7;
var obj = {
    length: originalLength,
    0: 2,
    1: 4,
    2: 8,
    3: 16,
    4: 32,
    5: 64,
    6: 128
}
var array = [ 2, 4, 8, 16, 32, 64, 128 ];
function mapFn(value, index) {
    arrayIndex++;
    if (value !== obj[arrayIndex]) {
        $ERROR("Value mismatch in mapFn at index " + index + " Actual : " + value + ". Expected : " + obj[arrayIndex]);
    }
    if (index !== arrayIndex) {
        $ERROR("Index mismatch in mapFn Actual : " + index + ". Expected : " + arrayIndex);
    }
    obj[originalLength + arrayIndex] = 2 * arrayIndex + 1;

    return obj[arrayIndex];
}


var a = Array.from(obj, mapFn);
if (a.length !== array.length) {
    $ERROR("Length mismatch. array : " + a.length + ". Mapped array : " + a.length);
}
for (j = 0; j < a.length; j++) {
    if (array[j] !== a[j]) {
        $ERROR("Element mismatch for array at index " + j + ". Actual : " + a[j] + ". Expected : " + array[j]);
    }
}
