// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: mapFn returns a non-integer
---*/

var array = [ 2, 4, 8, 16, 32, 64, 128 ];
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

        return {
            val : 127,
            get value() {
                return this.val;
            }
        };
    }
}

var a = Array.from(array, mapObj.mapFn, mapObj);
if (a.length !== array.length) {
    $ERROR("Length mismatch. array : " + array.length + ". Mapped array : " + a.length);
}
for (j = 0; j < a.length; j++) {
    if (127 !== a[j].value) {
        $ERROR("Element mismatch for mapped array at index " + j + ". Actual : " + a[j].value + ". Expected : 127");
    }
}
