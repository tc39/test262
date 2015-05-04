// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Passing array Buffer
---*/

var arrayBuffer = new ArrayBuffer([ 1, 2, 4, 8, 16, 32, 64, 128 ]);
var a = Array.from(arrayBuffer);
for (j = 0; j < a.length; j++) {
    if (arrayBuffer[j] != a[j]) {
        $ERROR("Elements mismatch at " + j + ". Actual : " + a[j] + ", Expected : " + arrayBuffer[j]);
    }
}
