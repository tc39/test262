// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Array with negative values
includes: [TypedArrayHelper.js]
---*/

var array = [ 2, 4, -8, -16, 32, -64, 127 ];

var typedArrays = CreateSignedTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    var output = typedArrays[i].join();
    if (output !== "2,4,-8,-16,32,-64,127") {
        $ERROR("Join was expected to return 2,4,-8,-16,32,-64,127 but returned " + output + " for " + typedArrays[i][Symbol.toStringTag]);
    }
}


array = [ 2, 4, 8, 16, 32, 64, 127 ];
typedArrays = CreateUnSignedTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    var output = typedArrays[i].join();
    if (output !== "2,4,8,16,32,64,127") {
        $ERROR("Join was expected to return 2,4,8,16,32,64,127 but returned " + output + " for " + typedArrays[i][Symbol.toStringTag]);
    }
}
