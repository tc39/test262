// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Try to copy NaN
includes: [TypedArrayHelper.js]
---*/

function CreateReducedSetOfTypedArrayInstances(obj) {
    var typedArrays = [];
    typedArrays[0] = new Float32Array(obj);
    typedArrays[1] = new Float64Array(obj);
    return typedArrays;
}

var array = [ NaN, NaN, NaN, NaN, 32, 64, 127 ];
var typedArrays = CreateReducedSetOfTypedArrayInstances(array);

for (i = 0; i < typedArrays.length; i++) {
    typedArrays[i].copyWithin(4, 0);
}
for (i = 0; i < typedArrays.length; i++) {
    if (array.length != typedArrays[i].length) {
        $ERROR("Length mismatch for " + typedArrays[i][Symbol.toStringTag] + ". Actual : " + typedArrays[i].length + ", Expected : " + array.length);
    }
    for (j = 0; j < typedArrays[i].length; j++) {
        if (!isNaN(typedArrays[i][j])) {
            $ERROR("Elements mismatch for " + typedArrays[i][Symbol.toStringTag] + " at " + j + ". Actual : " + typedArrays[i][j] + ", Expected : NaN");
        }
    }
}
