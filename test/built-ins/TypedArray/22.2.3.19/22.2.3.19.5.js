// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: reduce method's length is 1
includes: [TypedArrayHelper.js]
---*/

var array = [  ];
var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    if (typedArrays[i].reduce.length !== 1) {
        $ERROR("Length of the reduce method should be 1. Actual : " + typedArrays[i].reduce.length);
    }
}
