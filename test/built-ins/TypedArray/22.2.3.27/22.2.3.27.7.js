// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Empty array
includes: [TypedArrayHelper.js]
---*/

var array = [ ];
var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    var output = typedArrays[i].subarray();

    if (output[Symbol.toStringTag] !== typedArrays[i][Symbol.toStringTag]) {
        $ERROR("subarray returned the wrong typed array type. Actual : " + output[Symbol.toStringTag] + ". Expected : " + typedArrays[i][Symbol.toStringTag]);
    }
    if (output.length !== 0) {
        $ERROR("subarray returned the wrong length for the output array. Actual : " + output.length + ". Expected : 0");
    }
}
