// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Call map method on empty array
includes: [TypedArrayHelper.js]
---*/

function mapFn(value, index, obj) {
    $ERROR("mapFn is not expected to be called. Called for " + value + " and index " + index);
}

var array = [ ];
var j = 0;
var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    typedArrays[i].map(mapFn);
}

for (i = 0; i < typedArrays.length; i++) {
    if (0 != typedArrays[i].length) {
        $ERROR("Array length for " + typedArrays[i][Symbol.toStringTag] + " should be 0. Actual : " + typedArrays[i].length);
    }
}
