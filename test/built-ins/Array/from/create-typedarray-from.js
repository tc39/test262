// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Create a TypedArray from another TypedArray
es6id: 22.1.2.1
---*/

var typedArray = Int32Array.from([1, 2, 4, 8, 16, 32, 64, 128]);
var a = Array.from(typedArray);
for (var j = 0; j < typedArray.length; j++) {
    assert.sameValue(a[j], typedArray[j], "Elements mismatch at " + j + ".");
}
