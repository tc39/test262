// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Non-callable callbackFn function
includes: [TypedArrayHelper.js]
---*/

var array = [ 2, 4, 8, 16, 32, 64, 127 ];
var callbackFn = {};
var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    try {
        var output = typedArrays[i].reduce(callbackFn);
        $ERROR("Didn't throw an expected TypeError");
    } catch (error) {
        if (!(error instanceof TypeError)) {
            $ERROR("Was expecting a TypeError but got " + error + " instead");
        }
    }
}
