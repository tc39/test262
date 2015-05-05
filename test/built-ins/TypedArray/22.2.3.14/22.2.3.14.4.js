// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Pass a string as this to join
includes: [TypedArrayHelper.js]
---*/

var array = [ 2, 4, 8, 16, 32, 64, 127 ];

var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    try {
        var output = typedArrays[i].join.call([2, 4, 8]);
        $ERROR("Join was expected to throw TypeError for " + typedArrays[i][Symbol.toStringTag]);
    } catch (error) {
        if (!(error instanceof TypeError)) {
            $ERROR("Join was expected to throw TypeError for " + typedArrays[i][Symbol.toStringTag] + ", but got " + error + " instead");
        }
    }
}
