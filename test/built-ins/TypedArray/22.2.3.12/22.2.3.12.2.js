// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Call forEach for an empty array
includes: [TypedArrayHelper.js]
---*/

function callbackFn(value, index, obj) {
    $ERROR("callbackFn is not expected to be called. Called for " + value + " and index " + index);
}

var array = [ ];
var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    typedArrays[i].forEach(callbackFn);
}

for (i = 0; i < typedArrays.length; i++) {
    if (0 != typedArrays[i].length) {
        $ERROR("Array length for " + typedArrays[i][Symbol.toStringTag] + " should be 0. Actual : " + typedArrays[i].length);
    }
}
