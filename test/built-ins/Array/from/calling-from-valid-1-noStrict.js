// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Calling from with a valid map function without thisArg use noStrict
es6id: 22.1.2.1
flags: [noStrict]
---*/

var array = [ 0, 1, -2, 4, -8, 16 ];
var arrayIndex = -1;
var globalThis = this;
function mapFn(value, k) {

    arrayIndex++;
    assert.sameValue(value, array[arrayIndex], "From mapFn Element mismatch for index " + arrayIndex + ".");
    assert.sameValue(k, arrayIndex, "From mapFn index mismatch for " + arrayIndex + ".");
    assert.sameValue(globalThis, this, "Wrong this value is passed to mapFn for index " + arrayIndex + ".");

    return value;
}
var a = Array.from(array, mapFn);
for (var j = 0; j < array.length; j++) {
    assert.sameValue(a[j], array[j], "Elements mismatch at " + j + ".");
}
