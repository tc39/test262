// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: filterFn throws an exception
includes: [TypedArrayHelper.js]
---*/

var superArrayIndex = 0;
var array = [ 2, 4, 8, 16, 32, 64, 127 ];
var arrayIndex = -1;
function filterFn(value, index, obj) {
    throw "Expected error";

    $ERROR("Expected to throw an exception before this statement");

    return false;
}

var filteredArrays = [];
var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    try {
        filteredArrays[filteredArrays.length] = typedArrays[i].filter(filterFn);
    } catch (e) {
        if (e !== "Expected error") {
            $ERROR("Caught an unexpected error. Actual : " + e + ". Expected : Expected error");
        }
    }
}

if (filteredArrays.length != 0) {
    $ERROR("Length mismatch. Filtered Array : " + FilteredArray.length + ". Expected : 0");
}
