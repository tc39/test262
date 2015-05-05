// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: mapFn throws an exception
includes: [TypedArrayHelper.js]
---*/

var superArrayIndex = 0;
var array = [ 2, 4, 8, 16, 32, 64, 127 ];
var arrayIndex = -1;
function mapFn(value, index, obj) {
    throw "Expected error";

    return 127;
}

var mappedArrays = [];
var j = 0;
var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    try {
        mappedArrays[mappedArrays.length] = typedArrays[i].map(mapFn);
    } catch (e) {
        if (e !== "Expected error") {
            $ERROR("Caught an unexpected error. Actual : " + e + ". Expected : Expected error");
        }
    }
}

if (mappedArrays.length != 0) {
    $ERROR("Length mismatch. Mapped Array : " + mappedArray.length + ". Expected : 0");
}
