// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: predicate assigns a new array to the typedArray
includes: [TypedArrayHelper.js]
---*/

var i = 0;
var array = [ 2, 4, 8, 16, 32, 64, 127 ];
var arrayIndex = -1;
function predicate(value, index, obj) {
    arrayIndex = (arrayIndex + 1) % array.length;
    if (value !== array[arrayIndex]) {
        $ERROR("Value mismatch in predicate at index " + index + " for " + obj[Symbol.toStringTag] + ". Actual : " + value + ". Expected : " + array[arrayIndex]);
    }
    if (index !== arrayIndex) {
        $ERROR("Index mismatch in predicate for " + obj[Symbol.toStringTag] + ". Actual : " + index + ". Expected : " + arrayIndex);
    }

    typedArrays[i] = [ 2, 4, 8, 16, 32, 64, 127 ];

    return index == array.length - 1 ? true : false;
}

var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    var output = typedArrays[i].findIndex(predicate);
    if (output !== 6) {
        $ERROR("findIndex was expected to return 6 but returned " + output + " for " + typedArrays[i][Symbol.toStringTag]);
    }
}
