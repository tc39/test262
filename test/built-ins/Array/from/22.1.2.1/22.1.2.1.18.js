// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Elements deleted after the call started and before visited are not
    visited
---*/

var originalArray = [ 0, 1, -2, 4, -8, 16, -32, 64, -128, 256, -512, 1024 ];
var array = [ 0, 1, -2, 4, -8, 16, -32, 64, -128, 256, -512, 1024 ];
var a = [];
var mapObj = {
    arrayIndex : -1,
    mapFn(value, index) {
        this.arrayIndex++;
        if (value !== array[this.arrayIndex]) {
            $ERROR("Value mismatch in mapFn at index " + index + ". Actual : " + value + ". Expected : " + array[this.arrayIndex]);
        }
        if (index !== this.arrayIndex) {
            $ERROR("Index mismatch in mapFn. Actual : " + index + ". Expected : " + this.arrayIndex);
        }

        array.splice(array.length - 1, 1);
        return 127;
    }
}

a = Array.from(array, mapObj.mapFn, mapObj);

if (originalArray.length / 2 !== a.length) {
    $ERROR("Length mismatch. Old array : " + (originalArray.length / 2) + ". array : " + a.length);
}
for (j = 0; j < originalArray.length / 2; j++) {
    if (127 !== a[j]) {
        $ERROR("Element mismatch for mapped array at index " + j + ". Actual : " + a[j] + ". Expected : 127");
    }
}
