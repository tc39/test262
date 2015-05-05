// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Empty array with initial value
includes: [TypedArrayHelper.js]
---*/

var array = [  ];
function callbackFn(prev, current, currentIndex, obj) {
    $ERROR("Value mismatch in mapFn at callbackFn " + currentIndex + " for " + obj[Symbol.toStringTag] + ". Actual : " + current + ". Expected : " + array[arrayIndex]);
}

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
