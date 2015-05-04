// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Elements are updated after the call to from
---*/

//

var array = [ 127, 4, 8, 16, 32, 64, 128 ];
var arrayIndex = -1;
function mapFn(value, index) {
    arrayIndex++;
    if (index + 1 < array.length) {
        array[index + 1] = 127;
    }
    if (value !== 127) {
        $ERROR("Value mismatch in mapFn at index " + index + ". Actual : " + value + ". Expected : 127");
    }
    if (index !== arrayIndex) {
        $ERROR("Index mismatch in mapFn. Actual : " + index + ". Expected : " + arrayIndex);
    }

    return value;
}

var a = Array.from(array, mapFn);
if (a.length !== array.length) {
    $ERROR("Length mismatch. array : " + a.length + ". Actual array : " + (array.length - 1));
}
for (j = 0; j < a.length; j++) {
    if (127 !== a[j]) {
        $ERROR("Element mismatch for mapped array. Actual : " + a[j] + ". Expected : 127");
    }
}
