// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: End is greater than length
includes: [TypedArrayHelper.js]
---*/

var array = [ 127, 127, 127, 127, 127, 127, 127 ];
var typedArrays = CreateTypedArrayInstances(array);

for (i = 0; i < typedArrays.length; i++) {
    typedArrays[i].fill(15, 6, 7);
}
for (i = 0; i < typedArrays.length; i++) {
    for (j = 0; j < typedArrays[i].length; j++) {
        if (j < 6) {
            if (127 != typedArrays[i][j]) {
                $ERROR("Element mismatch after fill with end value greater than length on " + typedArrays[i][Symbol.toStringTag] + " at index " + j + ". Actual : " + typedArrays[i][j] + ". Expected : 127");
            }
        } else if (15 != typedArrays[i][j]) {
            $ERROR("Element mismatch after fill with end value greater than length on " + typedArrays[i][Symbol.toStringTag] + " at index " + j + ". Actual : " + typedArrays[i][j] + ". Expected : 15");
        }
    }
}
