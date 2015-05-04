// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Source array with boundary values
---*/

var array = [ Number.MAX_VALUE, Number.MIN_VALUE, Number.NaN, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY ];
var mapObj = {
    arrayIndex : -1,
    mapFn(value, index) {
        this.arrayIndex++;
        if (index !== 2) {
            if (value !== array[this.arrayIndex]) {
                $ERROR("Value mismatch in mapFn at index " + index + ". Actual : " + value + ". Expected : " + array[this.arrayIndex]);
            }
        } else {
            if (!isNaN(value)) {
                $ERROR("Value mismatch in mapFn at index " + index + ". Actual : " + value + ". Expected : NaN");
            }
        }
        if (index !== this.arrayIndex) {
            $ERROR("Index mismatch in mapFn. Actual : " + index + ". Expected : " + this.arrayIndex);
        }

        return value;
    }
}

var a = Array.from(array, mapObj.mapFn, mapObj);

if (a.length !== array.length) {
    $ERROR("Length mismatch. array : " + a.length + ". Actual array : " + array.length);
}
if (Number.MAX_VALUE !== a[0]) {
    $ERROR("Element mismatch for mapped array at index 0. Actual : " + a[0] + ". Expected : Number.MAX_VALUE");
}
if (Number.MIN_VALUE !== a[1]) {
    $ERROR("Element mismatch for mapped array at index 1. Actual : " + a[1] + ". Expected : Number.MIN_VALUE");
}
if (!isNaN(a[2])) {
    $ERROR("Element mismatch for mapped array at index 2. Actual : " + a[2] + ". Expected : Number.NaN");
}
if (Number.NEGATIVE_INFINITY !== a[3]) {
    $ERROR("Element mismatch for mapped array at index 3. Actual : " + a[3] + ". Expected : Number.NEGATIVE_INFINITY");
}
if (Number.POSITIVE_INFINITY !== a[4]) {
    $ERROR("Element mismatch for mapped array at index 0. Actual : " + a[4] + ". Expected : Number.POSITIVE_INFINITY");
}
