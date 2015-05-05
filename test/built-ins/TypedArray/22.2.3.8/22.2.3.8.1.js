// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Check the fill method's length
includes: [TypedArrayHelper.js]
---*/

var array = [ 2, 4, 8, 16, 32, 64, 127 ];
var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    if (1 != typedArrays[i].fill.length) {
        $ERROR("fill method's length should be 1. Actual : " + typedArrays[i].fill.length);
    }
}
