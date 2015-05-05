// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: callbackFn throws an exception
includes: [TypedArrayHelper.js]
---*/

var superArrayIndex = 0;
var array = [ 2, 4, 8, 16, 32, 64, 127 ];
var arrayIndex = -1;
function callbackFn(value, index, obj) {
    throw "Expected error";

    $ERROR("Expected to throw an exception before this statement");

    return false;
}

var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    try {
        typedArrays[i].forEach(callbackFn);
    } catch (e) {
        if (e !== "Expected error") {
            $ERROR("Caught an unexpected error. Actual : " + e + ". Expected : Expected error");
        }
    }
}

for (i = 0; i < typedArrays.length; i++) {
    if (typedArrays[i].length !== array.length) {
        $ERROR("Length mismatch. Typed array : " + typedArrays[i].length + ". Array : " + array.length);
    }
    for (j = 0; j < typedArrays[i].length; j++) {
        if (array[j] !== typedArrays[i][j]) {
            $ERROR("Element mismatch for typed array " + typedArrays[i][Symbol.toStringTag] + ". Actual : " + typedArrays[i][j] + ". Expected : " + array[j]);
        }
    }
}
