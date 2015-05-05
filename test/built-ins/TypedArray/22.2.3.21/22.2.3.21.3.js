// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: An empty array is reversed
includes: [TypedArrayHelper.js]
---*/

var array = [ ];
var typedArrays = CreateTypedArrayInstances(array);

for (i = 0; i < typedArrays.length; i++) {
    typedArrays[i].reverse();
}

for (i = 0; i < typedArrays.length; i++) {
    if (typedArrays[i].length !== 0) {
        $ERROR("Got wrong length at index " + i + " for " + typedArrays[i][Symbol.toStringTag] + ". Actual : " + typedArrays[i].length + ". Expected : 0");
    }
}
