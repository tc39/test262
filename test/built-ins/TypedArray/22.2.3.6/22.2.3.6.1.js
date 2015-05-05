// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Check entries
includes: [TypedArrayHelper.js]
---*/

var array = [ 2, 4, 8, 16, 32, 64, 127 ];
var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    var entries = typedArrays[i].entries();
    var j = 0;
    var entry = entries.next();
    while (!entry.done) {
        if (entry.value[0] !== j) {
            $ERROR("First element of the entry was expected to be " + j + ", but returned " + entry.value[0] + " instead for " + typedArrays[i][Symbol.toStringTag]);
        }
        if (entry.value[1] !== array[j]) {
            $ERROR("First element of the entry was expected to be " + array[j] + ", but returned " + entry.value[1] + " instead for " + typedArrays[i][Symbol.toStringTag]);
        }
        j++;
        entry = entries.next();
    }
}
