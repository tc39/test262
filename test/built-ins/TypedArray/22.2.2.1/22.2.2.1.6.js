// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Source is an object with length property and one item is deleted
    from the source
includes: [TypedArrayHelper.js]
---*/

//


var array = [2, 4, 0, 16];
var obj = {};
obj.length = 4;
obj[0] = 2;
obj[1] = 4;
obj[2] = 8;
obj[3] = 16;

delete obj[2];

var typedArrays = CreateIntegerTypedArrays(obj);
for (i = 0; i < typedArrays.length; i++) {
    if (array.length != typedArrays[i].length) {
        $ERROR("Length mismatch for " + typedArrays[i][Symbol.toStringTag] + ". Actual : " + typedArrays[i].length + ", Expected : " + array.length);
    }
    for (j = 0; j < typedArrays[i].length; j++) {
        if (array[j] != typedArrays[i][j]) {
            $ERROR("Elements mismatch for " + typedArrays[i][Symbol.toStringTag] + " at " + j + ". Actual : " + typedArrays[i][j] + ", Expected : " + array[j]);
        }
    }
}
