// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Passing array Buffer
es6id: 22.1.2.1
---*/

var arrayBuffer = new ArrayBuffer([ 1, 2, 4, 8, 16, 32, 64, 128 ]);
var a = Array.from(arrayBuffer);
for (var j = 0; j < a.length; j++) {
    assert.sameValue(a[j], arrayBuffer[j], "Elements mismatch at " + j + ".");
}
