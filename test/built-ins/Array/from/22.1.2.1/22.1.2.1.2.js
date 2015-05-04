// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Passing a valid array
---*/

var array = [ 0, 1, -2, 4, -8, 16, -32, 64, -128, 256, -512, 1024 ];
var a = Array.from(array);
for (j = 0; j < a.length; j++) {
    if (array[j] != a[j]) {
        $ERROR("Elements mismatch at " + j + ". Actual : " + a[j] + ", Expected : " + array[j]);
    }
}
