// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Array with only one element
includes: [TypedArrayHelper.js]
---*/

var array = [ 2 ];
var typedArrays = CreateTypedArrayInstances(array);

for (i = 0; i < typedArrays.length; i++) {
    typedArrays[i].reverse();
}

for (i = 0; i < typedArrays.length; i++) {
    if (typedArrays[i].length !== 1) {
        $ERROR("Got wrong length at index " + i + " for " + typedArrays[i][Symbol.toStringTag] + ". Actual : " + typedArrays[i].length + ". Expected : 1");
    }
    if (typedArrays[i][0] !== 2) {
        $ERROR("Got wrong value at index 0 for " + typedArrays[i][Symbol.toStringTag] + ". Actual : " + typedArrays[i][0] + ". Expected : 2");
    }
}
