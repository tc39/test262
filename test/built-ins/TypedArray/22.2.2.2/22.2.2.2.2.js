// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Passing empty array
includes: [TypedArrayHelper.js]
---*/

var array = [ ];
typedArrays = CreateTypedArraysOf(array);
for (i = 0; i < typedArrays.length; i++) {
    if (0 != typedArrays[i].length) {
        $ERROR("ERROR: Length mismatch for " + typedArrays[i] + ". Actual : " + typedArrays[i].length + ", Expected : 0");
    }
}
