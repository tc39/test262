// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: null is passed as this argument
includes: [TypedArrayHelper.js]
---*/

function callbackFn(value, index, obj) {
    $ERROR("callbackFnFn is not expected to be called. Called for " + value + " and index " + index);
}

var array = [ ];
var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    try {
        typedArrays[i].every.call(null, callbackFn);
        $ERROR("Expected to throw a TypeError but every didn't throw");
    } catch (e) {
        if (!(e instanceof TypeError)) {
            $ERROR("Expected to throw a TypeError but got " + e + " instead");
        }
    }
}
