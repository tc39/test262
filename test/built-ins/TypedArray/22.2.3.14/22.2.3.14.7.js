// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Try to delete Delete the length
includes: [TypedArrayHelper.js]
---*/

var array = [ 2 ];

var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    delete typedArrays[i].__proto__.__proto__.length;
    var output = typedArrays[i].join();
    if (output !== "2") {
        $ERROR("Join was expected to return 2 but returned " + output + " for " + typedArrays[i][Symbol.toStringTag]);
    }
}
