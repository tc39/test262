// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: End is an offset from length
includes: [TypedArrayHelper.js]
---*/

var array = [ 127, 127, 127, 127, 127, 127, 127 ];
var typedArrays = CreateTypedArrayInstances(array);

for (i = 0; i < typedArrays.length; i++) {
    typedArrays[i].fill(15, 2, -2);
}
for (i = 0; i < typedArrays.length; i++) {
    for (j = 0; j < typedArrays[i].length; j++) {
        if (j < 2 || j > 4) {
            if (127 != typedArrays[i][j]) {
                $ERROR("Element mismatch after fill with negative end value on " + typedArrays[i][Symbol.toStringTag] + " at index " + j + ". Actual : " + typedArrays[i][j] + ". Expected : 127");
            }
        } else if (15 != typedArrays[i][j]) {
            $ERROR("Element mismatch after fill with negative end value on " + typedArrays[i][Symbol.toStringTag] + " at index " + j + ". Actual : " + typedArrays[i][j] + ". Expected : 15");
        }
    }
}
