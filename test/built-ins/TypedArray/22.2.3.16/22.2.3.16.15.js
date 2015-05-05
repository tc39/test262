// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: length of lastIndexOf is 1
includes: [TypedArrayHelper.js]
---*/

var array = [ 1, 2, 4, 8, 16, 32, 64, 127 ];
var typedArrays = CreateTypedArrayInstances(array);

for (i = 0; i < typedArrays.length; i++) {
    if (typedArrays[i].lastIndexOf.length !== 1) {
        $ERROR("Got wrong length for lastIndexOf on " + typedArrays[i][Symbol.toStringTag] + ". Actual " + typedArrays[i].lastIndexOf.length + ". Expected : 1");
    }
}
