// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Source is a sparse array use onlyStrict
es6id: 22.1.2.1
flags: [onlyStrict]
---*/

var array = [0, 1, -2, 4, -8, , -32, 64, , 256, -512, 1024];
var arrayIndex = -1;
function mapFn(value, k) {
    arrayIndex++;
    assert.sameValue(value, array[arrayIndex], "From mapFn Element mismatch for index " + arrayIndex + ".");
    assert.sameValue(k, arrayIndex, "From mapFn index mismatch for " + arrayIndex + ".");

    return value;
}
var a = Array.from(array, mapFn);
for (var j = 0; j < a.length; j++) {
    assert.sameValue(a[j], array[j], "Elements mismatch at " + j + ".");
}
