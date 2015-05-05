// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: map is called by passing null for thisArg
---*/

var arrayIndex = -1;
var array = [ 2, 4, 8, 16, 32, 64, 128 ];
var mapObj = {
    mapFn(value, index) {
        arrayIndex++;
        if (value !== array[arrayIndex]) {
            $ERROR("Value mismatch in mapFn at index " + index + ". Actual : " + value + ". Expected : " + array[arrayIndex]);
        }
        if (index !== arrayIndex) {
            $ERROR("Index mismatch in mapFn. Actual : " + index + ". Expected : " + arrayIndex);
        }

        return array[arrayIndex];
    }
}

var a = Array.from(array, mapObj.mapFn, null);
if (a.length !== array.length) {
    $ERROR("Length mismatch. array : " + a.length + ". Original array : " + array.length);
}
for (j = 0; j < a.length; j++) {
    if (array[j] !== a[j]) {
        $ERROR("Element mismatch for mapped array. Actual : " + a[j] + ". Expected : " + array[j]);
    }
}
