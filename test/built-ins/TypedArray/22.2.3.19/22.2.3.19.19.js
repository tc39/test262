// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: callbackFn throws an exception
includes: [TypedArrayHelper.js]
---*/

var array = [ 2, 4, 8, 16, 32, 64, 127 ];
function callbackFn(prev, current, index, obj) {
    throw "Expected error";

    return true;
}

var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    try {
        var result = typedArrays[i].reduce(callbackFn);
        $ERROR("An Expected error was not thrown.");
    } catch (e) {
        if (e !== "Expected error") {
            $ERROR("Caught an unexpected error. Actual : " + e + ". Expected : Expected error");
        }
    }
}
