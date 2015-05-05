// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Invalid callbackFn
includes: [TypedArrayHelper.js]
---*/

var array = [ 2, 4, 8, 16, 32, 64, 127 ];
var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    try {
        var output = typedArrays[i].reduce(callbackFn);
        $ERROR("Didn't throw an expected ReferenceError");
    } catch (error) {
        if (!(error instanceof ReferenceError)) {
            $ERROR("Was expecting a ReferenceError but got " + error + " instead");
        }
    }
}
