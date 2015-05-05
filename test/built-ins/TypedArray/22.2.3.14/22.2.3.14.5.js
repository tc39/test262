// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Array with only one element
includes: [TypedArrayHelper.js]
---*/

var array = [ 2 ];

var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    var output = typedArrays[i].join();
    if (output !== "2") {
        $ERROR("Join was expected to return 2 but returned " + output + " for " + typedArrays[i][Symbol.toStringTag]);
    }
}
