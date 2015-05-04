// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: mapFn is attached to the TypedArray itself
---*/

var array = [ 2, 4, 8, 16, 32, 64, 128 ];
var a = [];
var i = 0;
Array.prototype.mapFn = function(value, index) {
    if (value !== array[i]) {
        $ERROR("Value mismatch in mapFn at index " + index + ". Actual : " + value + ". Expected : " + array[i]);
    }
    if (index !== i) {
        $ERROR("Index mismatch in mapFn. Actual : " + index + ". Expected : " + i);
    }
    i++;

    return 127;
};

a = Array.from(array, a.mapFn , a);
if (a.length !== array.length) {
    $ERROR("Length mismatch. array : " + array.length + ". Mapped array : " + a.length);
}

for (j = 0; j < a.length; j++) {
    if (127 !== a[j]) {
        $ERROR("Element mismatch for mapped array at index " + j + ". Actual : " + a[j] + ". Expected : 127");
    }
}
