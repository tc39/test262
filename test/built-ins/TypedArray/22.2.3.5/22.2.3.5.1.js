// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Check the copyWithin method's length
includes: [TypedArrayHelper.js]
---*/

var array = [ 2, 4, 8, 16, 32, 64, 127 ];
var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    if (2 != typedArrays[i].copyWithin.length) {
        $ERROR("copyWithin method's length should be 2. Actual : " + typedArrays[i].copyWithin.length);
    }
}
