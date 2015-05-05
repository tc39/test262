// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Check the length of typed arrays created from an empty array
includes: [TypedArrayHelper.js]
---*/

var array = [ ];
var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    if (0 !== typedArrays[i].length) {
        $ERROR("Length of the typed array is expected to be 0, but got " + typedArrays[i].length + " instead");
    }
}
