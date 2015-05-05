// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: End is less than start
includes: [TypedArrayHelper.js]
---*/

var array = [ 127, 127, 127, 127, 127, 127, 127 ];
var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    typedArrays[i].fill(15, 4, 0);
}
for (i = 0; i < typedArrays.length; i++) {
    for (j = 0; j < typedArrays[i].length; j++) {
        if (127 != typedArrays[i][j]) {
            $ERROR("Element mismatch after fill with end less than start on " + typedArrays[i][Symbol.toStringTag] + " at index " + j + ". Actual : " + typedArrays[i][j] + ". Expected : 127");
        }
    }
}
