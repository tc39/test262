// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Create an array from TypedArray
---*/

var typedArray = Int32Array.from([1, 2, 4, 8, 16, 32, 64, 128]);
var a = Array.from(typedArray);
for (j = 0; j < typedArray.length; j++) {
    if (typedArray[j] != a[j]) {
        $ERROR("Elements mismatch at " + j + ". Actual : " + a[j] + ", Expected : " + typedArray[j]);
    }
}
