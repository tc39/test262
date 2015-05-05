// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: mapFn tries to delete elements from the typed array
includes: [TypedArrayHelper.js]
---*/

var superArrayIndex = 0;
var array = [ 2, 4, 8, 16, 32, 64, 127 ];
var arrayIndex = -1;
function mapFn(value, index, obj) {
    arrayIndex = (arrayIndex + 1) % array.length;
    if (value !== array[arrayIndex]) {
        $ERROR("Value mismatch in mapFn at index " + index + " for " + obj[Symbol.toStringTag] + ". Actual : " + value + ". Expected : " + array[arrayIndex]);
    }
    if (index !== arrayIndex) {
        $ERROR("Index mismatch in mapFn for " + obj[Symbol.toStringTag] + ". Actual : " + index + ". Expected : " + arrayIndex);
    }

    if (index == 0) {
        delete typedArrays[superArrayIndex++];
    }

    return 127;
}

var mappedArrays = [];
var j = 0;
var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    mappedArrays[mappedArrays.length] = typedArrays[i].map(mapFn);
}

if (mappedArrays.length != typedArrays.length) {
    $ERROR("Length mismatch. Mapped Array : " + mappedArray.length + ". Typed Array : " + typedArrays.length);
}

for (i = 0; i < typedArrays.length; i++) {
    if (typedArrays[i] !== undefined) {
        $ERROR("Delete didn't happen as expected. Typed array : " + typedArrays[i] + ". Expected : undefined");
    }
}
