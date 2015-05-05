// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Pass another typed array as this
includes: [TypedArrayHelper.js]
---*/

var arrays = [
                [ 1, 2, 4, 8, 16, 32, 64, 127 ],
                [ 1, 2, 4, 8, 16, 32, 64, 127, 1 ],
                [ 1, 2, 4, 8, 16, 32, 64, 127, 1, 2 ],
                [ 1, 2, 4, 8, 16, 32, 64, 127, 1, 2, 4 ],
                [ 1, 2, 4, 8, 16, 32, 64, 127, 1, 2, 4, 8 ],
                [ 1, 2, 4, 8, 16, 32, 64, 127, 1, 2, 4, 8, 16 ],
                [ 1, 2, 4, 8, 16, 32, 64, 127, 1, 2, 4, 8, 16, 32 ],
                [ 1, 2, 4, 8, 16, 32, 64, 127, 1, 2, 4, 8, 16, 32, 64 ],
                [ 1, 2, 4, 8, 16, 32, 64, 127, 1, 2, 4, 8, 16, 32, 64, 127 ]];

var arrayIndex = -1;
function callbackFn(value, index, obj) {
    arrayIndex++;
    var nextIndex = (i + 1) % arrays.length;
    if (obj.length !== arrays[nextIndex].length) {
        $ERROR("Length mismatch in callbackFn at index " + i + " for " + obj[Symbol.toStringTag] + ". Actual : " + obj.length + ". Expected : " + arrays[nextIndex].length);
    }
    if (obj[Symbol.toStringTag] !== typedArrays[nextIndex][Symbol.toStringTag]) {
        $ERROR("Tag mismatch in callbackFn at index " + i + ". Actual : " + obj[Symbol.toStringTag] + ". Expected : " + typedArrays[nextIndex][Symbol.toStringTag]);
    }
    if (value !== arrays[nextIndex][arrayIndex]) {
        $ERROR("Value mismatch in callbackFn at index " + index + " for " + obj[Symbol.toStringTag] + ". Actual : " + value + ". Expected : " + arrays[nextIndex][arrayIndex]);
    }
    if (index !== arrayIndex) {
        $ERROR("Index mismatch in callbackFn for " + obj[Symbol.toStringTag] + ". Actual : " + index + ". Expected : " + arrayIndex);
    }
    arrayIndex = index === arrays[nextIndex].length - 1 ? -1 : arrayIndex;
}

var typedArrayTypes = CreateTypedArrayTypes();
var typedArrays = [];
for (i = 0; i < typedArrayTypes.length; i++) {
    typedArrays[i] = new typedArrayTypes[i](arrays[i]);
}
for (i = 0; i < typedArrayTypes.length; i++) {
    typedArrays[i].forEach.call(typedArrays[(i + 1) % typedArrayTypes.length], callbackFn);
}

for (i = 0; i < typedArrays.length; i++) {
    if (typedArrays[i].length !== arrays[i].length) {
        $ERROR("Length mismatch. Typed array : " + typedArrays[i].length + ". Array : " + arrays[i].length);
    }
    for (j = 0; j < typedArrays[i].length; j++) {
        if (arrays[i][j] !== typedArrays[i][j]) {
            $ERROR("Element mismatch for typed array " + typedArrays[i][Symbol.toStringTag] + ". Actual : " + typedArrays[i][j] + ". Expected : " + arrays[i][j]);
        }
    }
}
for (i = 0; i < typedArrays.length; i++) {
    if (typedArrays[i].length !== arrays[i].length) {
        $ERROR("Length mismatch. Typed array : " + typedArrays[i].length + ". Array : " + arrays[i].length);
    }
    for (j = 0; j < typedArrays[i].length; j++) {
        if (arrays[i][j] !== typedArrays[i][j]) {
            $ERROR("Element mismatch for typed array " + typedArrays[i][Symbol.toStringTag] + ". Actual : " + typedArrays[i][j] + ". Expected : " + arrays[i][j]);
        }
    }
}
