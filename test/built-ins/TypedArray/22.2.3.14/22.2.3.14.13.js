// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Pass an object as separator
includes: [TypedArrayHelper.js]
---*/

var array = [ 2, 4, 8, 16, 32, 64, 127 ];
var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    var output = typedArrays[i].join({ value : ";" });
    if (output !== "2[object Object]4[object Object]8[object Object]16[object Object]32[object Object]64[object Object]127") {
        $ERROR("Join was expected to return 2[object Object]4[object Object]8[object Object]16[object Object]32[object Object]64[object Object]127 but returned " + output + " for " + typedArrays[i][Symbol.toStringTag]);
    }
}
