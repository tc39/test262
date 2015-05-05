// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Check values
includes: [TypedArrayHelper.js]
---*/

var array = [ 2, 4, 8, 16, 32, 64, 127 ];
var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    var value = typedArrays[i][Symbol.iterator]();
    var j = 0;
    while (!(v = value.next()).done) {
        if (v.value !== array[j]) {
            $ERROR("First element of the entry was expected to be " + array[j] + ", but returned " + v.value + " instead for " + typedArrays[i][Symbol.toStringTag]);
        }
        j++
    }
}
