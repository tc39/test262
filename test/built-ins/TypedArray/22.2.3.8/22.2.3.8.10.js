// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Try to fill an empty array
includes: [TypedArrayHelper.js]
---*/

var array = [ ];
var typedArrays = CreateTypedArrayInstances(array);

for (i = 0; i < typedArrays.length; i++) {
    typedArrays[i].fill(5);
}
for (i = 0; i < typedArrays.length; i++) {
    if (0 != typedArrays[i].length) {
        $ERROR("After fill the length was expected to remain 0. Actual : " + typedArrays[i].length);
    }
}
