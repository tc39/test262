// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Redefine length property in the instance
includes: [TypedArrayHelper.js]
---*/

var array = [ 2, 4, 8, 16, 32, 64 ];
var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    Object.defineProperty(typedArrays[i], "length", { value : undefined });
    var output = typedArrays[i].join();
    if ("2,4,8,16,32,64" !== output) {
        $ERROR("join returned wrong value. Actual : " + output + ". Expected : 2,4,8,16,32,64}");
    }
}
