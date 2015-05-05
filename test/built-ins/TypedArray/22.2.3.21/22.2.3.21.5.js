// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Same array buffer is used to create all typed array types
includes: [TypedArrayHelper.js]
---*/

var array = [
                [ 1, 2, 4, 8, 16, 32, 64, 127 ],
                [ 1, 2, 4, 8, 16, 32, 64, 127, 2 ],
                [ 1, 2, 4, 8, 16, 32, 64, 127, 2, 4 ],
                [ 1, 2, 4, 8, 16, 32, 64, 127, 2, 4, 8 ],
                [ 1, 2, 4, 8, 16, 32, 64, 127, 2, 4, 8, 16 ],
                [ 1, 2, 4, 8, 16, 32, 64, 127, 2, 4, 8, 16, 32 ],
                [ 1, 2, 4, 8, 16, 32, 64, 127, 2, 4, 8, 16, 32, 64 ],
                [ 1, 2, 4, 8, 16, 32, 64, 127, 2, 4, 8, 16, 32, 64, 127 ],
                [ 1, 2, 4, 8, 16, 32, 64, 127, 2, 4, 8, 16, 32, 64, 127, 2 ]
            ];
var typedArrays = [];
var typedArrayTypes = CreateTypedArrayTypes();
for (i = 0; i < typedArrayTypes.length; i++) {
    typedArrays[typedArrays.length] = typedArrayTypes[i].from(array[i]);
}

for (i = 0; i < typedArrays.length; i++) {
    typedArrays[i].reverse.call(typedArrays[(i + 1) % typedArrays.length]);
}

for (i = 0; i < typedArrays.length; i++) {
    for (j = 0; j < typedArrays[i].length; j++) {
        if (typedArrays[i][j] !== array[i][array[i].length - (j + 1)]) {
            $ERROR("Got a wrong value at index " + j + " for " + typedArrays[i][Symbol.toStringTag] + ". Actual : " + typedArrays[i][j] + ". Expected : " + array[i][array[i].length - (j + 1)]);
        }
    }
}
