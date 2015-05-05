// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: mapFn throws an exception
includes: [TypedArrayHelper.js]
---*/

var array = [ 2, 4, 8, 16, 32, 64, 127 ];
function mapFn(value, index) {
    throw "Expected error";

    return 127;
}

var typedArrays = [];
var typedArrayTypes = CreateTypedArrayTypes(array);
for (i = 0; i < typedArrayTypes.length; i++) {
    try {
        typedArrays[typedArrays.length] = typedArrayTypes[i].from(array, mapFn);
    } catch (e) {
        if (e !== "Expected error") {
            $ERROR("Caught an unexpected error. Actual : " + e + ". Expected : Expected error");
        }
    }
}

if (typedArrays.length != 0) {
    $ERROR("Length mismatch. Mapped Array : " + mappedArray.length + ". Expected : 0");
}
