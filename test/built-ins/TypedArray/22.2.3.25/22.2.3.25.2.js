// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Call some method on empty array
includes: [TypedArrayHelper.js]
---*/

function callbackFn(value, index, obj) {
    $ERROR("callbackFn is not expected to be called. Called for " + value + " and index " + index);
}

var array = [ ];
var j = 0;
var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    typedArrays[i].some(callbackFn);
}

for (i = 0; i < typedArrays.length; i++) {
    if (0 != typedArrays[i].length) {
        $ERROR("Array length for " + typedArrays[i][Symbol.toStringTag] + " should be 1. Actual : " + typedArrays[i].length);
    }
}
