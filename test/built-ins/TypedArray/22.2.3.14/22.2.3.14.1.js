// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Pass empty array to join
includes: [TypedArrayHelper.js]
---*/

var array = [ ];

var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    var output = typedArrays[i].join();
    if (output !== "") {
        $ERROR("Join was expected to return an empty string but returned " + output + " for " + typedArrays[i][Symbol.toStringTag]);
    }
}
