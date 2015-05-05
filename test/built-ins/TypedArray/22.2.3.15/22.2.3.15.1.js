// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Check keys
includes: [TypedArrayHelper.js]
---*/

var array = [ 2, 4, 8, 16, 32, 64, 127 ];
var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    var keys = typedArrays[i].keys();
    var j = 0;
    while (!(key = keys.next()).done) {
        if (key.value !== j) {
            $ERROR("First element of the entry was expected to be " + j + ", but returned " + key.value + " instead for " + typedArrays[i][Symbol.toStringTag]);
        }
        j++;
    }
}
